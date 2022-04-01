//import * as helper from './w3Helper.js';

const serverUrl = "https://bd6xpqfykho5.usemoralis.com:2053/server"; //Server url from moralis.io
const appId = "s9hVE8SmoSVGqcdEyp6eQhQmbFBVXxmvoMLPEaAU"; // Application id from moralis.io

//This is being used to hold the Web3API namespace
let token_obj;

//keeps track of if a user is logged in.
let logged_in;

//Tracks if user has a vote token
var has_token = false;

var voteamount1 = 0;
var voteamount2 = 0;
var voteamount3 = 0;
var voteamount4 = 0;
var voteamount5 = 0;

var vote_token_balance = 0;

disableButtons();

//Auto - Refreshes wallet balances every 35 seconds
var intervalId = window.setInterval(function() {
    getVoteBalances();
}, 35000);

//Called when site is loading.
async function init() {
    await Moralis.start({ serverUrl, appId });
    await Moralis.enableWeb3();
    getVoteBalances();


    token_obj = await Moralis.Web3API.token;
    currentUser = await Moralis.User.current();
    global.user_profile.entity = currentUser;
    //If User is logged in
    if (currentUser) {
        logged_in = true;
        enableButtons();
        document.getElementById("login_button").innerText = "Logout";
        userAddress = currentUser.get('ethAddress');
        document.getElementById("current-wallet").innerText = "0x..." + userAddress.slice(38);
        tokenCheck();
        setHelperData();
        console.log(global.user_profile.born);
        document.getElementById("logged_in_info").style.display = "block";
    }

    //If user is not logged in
    else {
        logged_in = false;
        disableButtons();
        document.getElementById("login_button").innerText = "Sign in with MetaMask";
        document.getElementById("logged_in_info").style.display = "none";
    }
}

async function setHelperData() {
    global.user_profile.born = JSON.stringify(currentUser.createdAt);
    const options = { chain: 'bsc' }
    global.user_profile.balances = await Moralis.Web3API.account.getTokenBalances(options);
    global.user_profile.native_bal = await Moralis.Web3API.account.getNativeBalance(options);
}
//Controls the auto enable/disable of the buttons. Comment/uncomment based on how many cards you need. 
function enableButtons() {
    document.getElementById("vote_token_1_button").disabled = false;
    document.getElementById("vote_token_2_button").disabled = false;
    document.getElementById("vote_token_3_button").disabled = false;
    document.getElementById("vote_token_1_button").removeAttribute("title");
    document.getElementById("vote_token_2_button").removeAttribute("title");
    document.getElementById("vote_token_3_button").removeAttribute("title");
    //document.getElementById("vote_token_4_button").removeAttribute("title");
    //document.getElementById("vote_token_5_button").removeAttribute("title");
}

function disableButtons() {
    document.getElementById("vote_token_1_button").disabled = true;
    document.getElementById("vote_token_2_button").disabled = true;
    document.getElementById("vote_token_3_button").disabled = true;
    //document.getElementById("vote_token_4_button").disabled = true;
    //document.getElementById("vote_token_5_button").disabled = true;
}

async function login() {
    try {
        currentUser = Moralis.User.current();
        if (!currentUser) {
            document.getElementById("login_button").innerText = "Authenticating...";
            currentUser = await Moralis.authenticate();
            userAddress = currentUser.get('ethAddress');
            document.getElementById("current-wallet").innerText = "0x..." + userAddress.slice(38);
            enableButtons();
            tokenCheck();
            setHelperData();
        } else {
            logOut();
        }
        document.getElementById("login_button").innerText = "Logout";
        document.getElementById("logged_in_info").style.display = "block";
        logged_in = true;
    } catch (error) {
        if (error.message == "MetaMask Message Signature: User denied message signature.") {
            alert("Login cancelled")
            document.getElementById("login_button").innerText = "Sign in with Metamask";
        }
    }
}
async function logOut() {
    currentUser = await Moralis.User.logOut();
    document.getElementById("login_button").innerText = "Sign in with Metamask";
    disableButtons();
    document.getElementById("message").style.display = "none";
    document.getElementById("logged_in_info").style.display = "none";

    logged_in = false;
}

async function loginWC() {
    try {
        currentUser = Moralis.User.current();
        if (!currentUser) {
            document.getElementById("login_button_wc").innerText = "Authenticating...";
            currentUser = await Moralis.authenticate({ provider: "walletconnect", chainId: 56 });
            userAddress = currentUser.get('ethAddress');
            document.getElementById("current-wallet").innerText = "0x..." + userAddress.slice(38);
            enableButtons();
            tokenCheck();
            setHelperData();
        } else {
            logOutWC();
        }
        document.getElementById("login_button_wc").innerText = "Logout";
        document.getElementById("logged_in_info").style.display = "block";
        logged_in = true;
    } catch (error) {
        if (error.message == "User closed modal") {
            alert("Login cancelled")
            document.getElementById("login_button_wc").innerText = "Sign in with WalletConnect";
        }
    }
}

async function logOutWC() {
    currentUser = await Moralis.User.logOut();
    document.getElementById("login_button_wc").innerText = "Sign in with WalletConnect";
    disableButtons();
    document.getElementById("message").style.display = "none";
    document.getElementById("logged_in_info").style.display = "none";

    logged_in = false;
}

async function tokenCheck() {
    let currentBalances = await Moralis.Web3API.account.getTokenBalances({ chain: 'bsc' });
    vote_token = currentBalances.filter(function(v) {
        return v.token_address == 0x73Ae8e73cc8374a7e3A983637091624041E5B19D;
    });
    if (vote_token.length != 0) {
        has_token = true;
        document.getElementById("message").style.display = "none";
        vote_token_balance = (vote_token[0].balance);
        document.getElementById("dvt-balance-current").innerText = vote_token_balance;
    } else if (vote_token.length == 0) {
        vote_token_balance = 0;
        document.getElementById("dvt-balance-current").innerText = vote_token_balance;
        has_token = false;
        document.getElementById("message").style.display = "block";
        document.getElementById("message").innerText = "No DvT in Wallet";
        disableButtons();
    }
}
//Start copy here for new card
async function voteOne() {
    //Make sure to change the voteamount1 to whatever number you need for the new card
    if (voteamount1 == 0) {
        alert("Please Enter Number of Votes");
        return;
    } else if (voteamount1 > vote_token_balance) {
        scroll(0, 0);
        document.getElementById("message").style.display = "block";
        document.getElementById("message").innerText = "Insufficent DvT in Wallet";
        setTimeout(() => { document.getElementById("message").style.display = "none"; }, 10000);
        return;
    }
    const tx = await Moralis.transfer({
        type: "erc20",
        amount: Moralis.Units.Token(voteamount1, "0"),
        //Change the receiver address to the wallet that will be receiving the token
        receiver: "0xF0858a63193f3958D42AC6d2fD21B84CEC5291C8",
        contractAddress: "0x73Ae8e73cc8374a7e3A983637091624041E5B19D",
        awaitReceipt: false
    });
    document.getElementById("message").innerText = "Submitting Vote...";
    tx.on("error", (error) => {
        scroll(0, 0);
        document.getElementById("message").style.display = "block";
        document.getElementById("message").innerText = "Vote Failed";
        setTimeout(() => { document.getElementById("message").style.display = "none"; }, 10000);
    });
    tx.on("receipt", (receipt) => {
        scroll(0, 0);
        document.getElementById("message").style.display = "block";
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerText = "Vote Successful!";
        updatingBalancesText();
        setTimeout(() => { document.getElementById("message").style.display = "none"; }, 10000);
        document.getElementById("message").style.color = "white";
        setTimeout(() => { tokenCheck(); }, 2000);
        setTimeout(() => { getVoteBalances(); }, 5000);
        setTimeout(() => { getVoteBalances(); }, 5000);
        setTimeout(() => { tokenCheck(); }, 5000);
    });
}
//Stop copy here
async function voteTwo() {
    if (voteamount2 == 0) {
        alert("Please Enter Number of Votes");
        return;
    } else if (voteamount2 > vote_token_balance) {
        scroll(0, 0);
        document.getElementById("message").style.display = "block";
        document.getElementById("message").innerText = "Insufficent DvT in Wallet";
        setTimeout(() => { document.getElementById("message").style.display = "none"; }, 10000);
        return;
    }
    const tx = await Moralis.transfer({
        type: "erc20",
        amount: Moralis.Units.Token(voteamount2, "0"),
        receiver: "0x26F4C1C79dA2db3E298053B1416089783A796c70",
        contractAddress: "0x73Ae8e73cc8374a7e3A983637091624041E5B19D",
        awaitReceipt: false
    });
    document.getElementById("message").innerText = "Submitting Vote...";
    tx.on("error", (error) => {
        scroll(0, 0);
        document.getElementById("message").style.display = "block";
        document.getElementById("message").innerText = "Vote Failed";
        setTimeout(() => { document.getElementById("message").style.display = "none"; }, 10000);
    });
    tx.on("receipt", (receipt) => {
        scroll(0, 0);
        document.getElementById("message").style.display = "block";
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerText = "Vote Successful!";
        updatingBalancesText();
        setTimeout(() => { document.getElementById("message").style.display = "none"; }, 10000);
        document.getElementById("message").style.color = "white";
        setTimeout(() => { tokenCheck(); }, 2000);
        setTimeout(() => { getVoteBalances(); }, 5000);
        setTimeout(() => { getVoteBalances(); }, 5000);
        setTimeout(() => { tokenCheck(); }, 5000);
    });
}

async function voteThree() {
    if (voteamount3 == 0) {
        alert("Please Enter Number of Votes");
        return;
    } else if (voteamount3 > vote_token_balance) {
        scroll(0, 0);
        document.getElementById("message").style.display = "block";
        document.getElementById("message").innerText = "Insufficent DvT in Wallet";
        setTimeout(() => { document.getElementById("message").style.display = "none"; }, 10000);
        return;
    }
    const tx = await Moralis.transfer({
        type: "erc20",
        amount: Moralis.Units.Token(voteamount3, "0"),
        receiver: "0xecbA00776aA154B3c05486badB0AE2d08B865d04",
        contractAddress: "0x73Ae8e73cc8374a7e3A983637091624041E5B19D",
        awaitReceipt: false
    });
    tx.on("error", (error) => {
        scroll(0, 0);
        document.getElementById("message").style.display = "block";
        document.getElementById("message").innerText = "Vote Failed";
        setTimeout(() => { document.getElementById("message").style.display = "none"; }, 10000);
    });
    tx.on("receipt", (receipt) => {
        scroll(0, 0);
        document.getElementById("message").style.display = "block";
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerText = "Vote Successful!";
        updatingBalancesText();
        setTimeout(() => { document.getElementById("message").style.display = "none"; }, 10000);
        document.getElementById("message").style.color = "white";
        setTimeout(() => { tokenCheck(); }, 2000);
        setTimeout(() => { getVoteBalances(); }, 5000);
        setTimeout(() => { getVoteBalances(); }, 5000);
        setTimeout(() => { tokenCheck(); }, 5000);
    });
    //Paste here for new card
}

async function getVoteBalances() {
    //Start copy here for new card
    //Make sure you change the address to the wallet you need the balances from and set the variable balances1 to whatever number you need
    let balances1 = await Moralis.Web3API.account.getTokenBalances({ chain: 'bsc', address: "0xF0858a63193f3958D42AC6d2fD21B84CEC5291C8" });
    result1 = balances1.filter(function(e) {
        return e.token_address == 0x73Ae8e73cc8374a7e3A983637091624041E5B19D;
    });
    //End copy here
    let balances2 = await Moralis.Web3API.account.getTokenBalances({ chain: 'bsc', address: "0x26F4C1C79dA2db3E298053B1416089783A796c70" });
    result2 = balances2.filter(function(f) {
        return f.token_address == 0x73Ae8e73cc8374a7e3A983637091624041E5B19D;
    });

    let balances3 = await Moralis.Web3API.account.getTokenBalances({ chain: 'bsc', address: "0xecbA00776aA154B3c05486badB0AE2d08B865d04" });
    result3 = balances3.filter(function(g) {
        return g.token_address == 0x73Ae8e73cc8374a7e3A983637091624041E5B19D;
    });
    //Paste copy here 

    //Start copy here for new card
    //Change the number on the variables to whatever number you need
    if (result1.length == 1) {
        document.getElementById("vote-token-1-count").innerText = (result1[0].balance);
    } else {
        document.getElementById("vote-token-1-count").innerText = "0";
    };
    //Stop copy here
    if (result2.length == 1) {
        document.getElementById("vote-token-2-count").innerText = (result2[0].balance);
    } else {
        document.getElementById("vote-token-2-count").innerText = "0";
    };
    if (result3.length == 1) {
        document.getElementById("vote-token-3-count").innerText = (result3[0].balance);
    } else {
        document.getElementById("vote-token-3-count").innerText = "0";
    };
    //Paste copy here for new card
};

//Start copy here for new card
//Be sure to change the numbers at the end of the variables
function setVoteCount1() {
    var votecount = document.getElementById("vote-count-input1");
    voteCountValue = votecount.value;
    voteamount1 = parseInt(voteCountValue);
    console.log(voteamount1);
}
//Stop copy here
function setVoteCount2() {
    var votecount = document.getElementById("vote-count-input2");
    voteCountValue = votecount.value;
    voteamount2 = parseInt(voteCountValue);
    console.log(voteamount2);
}

function setVoteCount3() {
    var votecount = document.getElementById("vote-count-input3");
    voteCountValue = votecount.value;
    voteamount3 = parseInt(voteCountValue);
    console.log(voteamount3);
}
//Paste copy here for new card

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

function updatingBalancesText() {
    document.getElementById("vote-token-1-count").innerText = "Updating Balances...";
    document.getElementById("vote-token-2-count").innerText = "Updating Balances...";
    document.getElementById("vote-token-3-count").innerText = "Updating Balances...";
}

//function openModal() {
//document.getElementById("modal"). = "block";
//}

//function closeModal() {
//    document.getElementById("token_modal").style.display = "none";
//}

//function txistory() {
//    var url = "https://bscscan.com/tx/";
//    var tId = rtest.transactionHash;
//    document.getElementById("test3").innerHTML = " <a href='" + url + tId + "'>" + "View Transaction" + "</a> ";
//}

init();
getVoteBalances();

//document.getElementById("modal_close").onclick = closeModal;

//This what faciliates the links between the HTML buttons and the javascript functions, uncomment or add/remove as needed when you add new cards in the HTML
document.getElementById("lg").onclick = logOut;
document.getElementById("login_button").onclick = login;
document.getElementById("login_button_wc").onclick = loginWC;
document.getElementById("vote_token_1_button").onclick = voteOne;
document.getElementById("vote_token_2_button").onclick = voteTwo;
document.getElementById("vote_token_3_button").onclick = voteThree;
//document.getElementById("vote_token_3_button").onclick = voteFour;
//document.getElementById("vote_token_3_button").onclick = voteFive;
document.getElementById("vote-count-input1").oninput = setVoteCount1;
document.getElementById("vote-count-input2").oninput = setVoteCount2;
document.getElementById("vote-count-input3").oninput = setVoteCount3;
//document.getElementById("vote-count-input4").oninput = setVoteCount4;
//document.getElementById("vote-count-input5").oninput = setVoteCount5;