//import * as helper from './w3Helper.js';
const BLOCKCHAIN_NODE_URL = "https://blue-dog.defitect.com";
var __WEB_3__ = new Web3(BLOCKCHAIN_NODE_URL);


const erc20Abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "isExcluded",
                "type": "bool"
            }
        ],
        "name": "ExcludedFromFee",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "message",
                "type": "string"
            }
        ],
        "name": "Log",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "LogBytes",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "Paused",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "previousAdminRole",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "newAdminRole",
                "type": "bytes32"
            }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleGranted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleRevoked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "Unpaused",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "oldAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "newAddress",
                "type": "address"
            }
        ],
        "name": "UpdateFeeManger",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "oldAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "newAddress",
                "type": "address"
            }
        ],
        "name": "UpdateRewardsManger",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "DECIMALS",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "INITIAL_SUPPLY",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MAX_SUPPLY",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MINTER_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "PAUSER_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "automatedMarketMakerPairs",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "burnFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "buyFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "distributeFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "enableTransfers",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "essentialAddress",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "status",
                "type": "bool"
            }
        ],
        "name": "excludeFromFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "feeDistributionMinAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "feeManager",
        "outputs": [
            {
                "internalType": "contract IFeeManager",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleAdmin",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getRoleMember",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleMemberCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "hasRole",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "isExcludedFromFee",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "pause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "paused",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rewardsManager",
        "outputs": [
            {
                "internalType": "contract IRewardManager",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "sellFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "status",
                "type": "bool"
            }
        ],
        "name": "setAutomatedMarketMakerPair",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "newFee",
                "type": "uint8"
            }
        ],
        "name": "setBuyFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "minAmount",
                "type": "uint256"
            }
        ],
        "name": "setFeeDistributionMinAmount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            }
        ],
        "name": "setName",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint8",
                "name": "newFee",
                "type": "uint8"
            }
        ],
        "name": "setSellFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_symbol",
                "type": "string"
            }
        ],
        "name": "setSymbol",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "transfersEnabled",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "unpause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "status",
                "type": "bool"
            }
        ],
        "name": "updateEssentialAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newAddress",
                "type": "address"
            }
        ],
        "name": "updateFeeManager",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newAddress",
                "type": "address"
            }
        ],
        "name": "updateRewardManager",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const lockAbi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "previousAdmin",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "newAdmin",
                "type": "address"
            }
        ],
        "name": "AdminChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "implementation",
                "type": "address"
            }
        ],
        "name": "Upgraded",
        "type": "event"
    },
    {
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "inputs": [],
        "name": "admin",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newAdmin",
                "type": "address"
            }
        ],
        "name": "changeAdmin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "implementation",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newImplementation",
                "type": "address"
            }
        ],
        "name": "upgradeTo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newImplementation",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "upgradeToAndCall",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Claim",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "previousAdminRole",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "newAdminRole",
                "type": "bytes32"
            }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleGranted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleRevoked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Stake",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Unstake",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MANAGER_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "rewardRate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "minStake",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxStake",
                        "type": "uint256"
                    },
                    {
                        "internalType": "contract ERC20",
                        "name": "stakingToken",
                        "type": "address"
                    },
                    {
                        "internalType": "contract ERC20",
                        "name": "rewardsToken",
                        "type": "address"
                    }
                ],
                "internalType": "struct StakingUtils.StakingConfiguration",
                "name": "config",
                "type": "tuple"
            }
        ],
        "name": "__BaseStaking_init",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "rewardRate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "minStake",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxStake",
                        "type": "uint256"
                    },
                    {
                        "internalType": "contract ERC20",
                        "name": "stakingToken",
                        "type": "address"
                    },
                    {
                        "internalType": "contract ERC20",
                        "name": "rewardsToken",
                        "type": "address"
                    }
                ],
                "internalType": "struct StakingUtils.StakingConfiguration",
                "name": "config",
                "type": "tuple"
            }
        ],
        "name": "__BaseStaking_init_unchained",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "rewardRate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "minStake",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxStake",
                        "type": "uint256"
                    },
                    {
                        "internalType": "contract ERC20",
                        "name": "stakingToken",
                        "type": "address"
                    },
                    {
                        "internalType": "contract ERC20",
                        "name": "rewardsToken",
                        "type": "address"
                    }
                ],
                "internalType": "struct StakingUtils.StakingConfiguration",
                "name": "config",
                "type": "tuple"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "stakeTax",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "unStakeTax",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "hpayFee",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "feeAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "hpayFeeAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "contract ERC20",
                        "name": "hpayToken",
                        "type": "address"
                    }
                ],
                "internalType": "struct StakingUtils.TaxConfiguration",
                "name": "taxConfig",
                "type": "tuple"
            },
            {
                "internalType": "uint256",
                "name": "_lockTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "penalty",
                "type": "uint256"
            }
        ],
        "name": "__FixedTimeLockStaking_init",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_lockTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "penalty",
                "type": "uint256"
            }
        ],
        "name": "__FixedTimeLockStaking_init_unchained",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "rewardRate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "minStake",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxStake",
                        "type": "uint256"
                    },
                    {
                        "internalType": "contract ERC20",
                        "name": "stakingToken",
                        "type": "address"
                    },
                    {
                        "internalType": "contract ERC20",
                        "name": "rewardsToken",
                        "type": "address"
                    }
                ],
                "internalType": "struct StakingUtils.StakingConfiguration",
                "name": "config",
                "type": "tuple"
            },
            {
                "internalType": "address",
                "name": "_reflectionToken",
                "type": "address"
            }
        ],
        "name": "__ReflectionSupportStaking_init",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_reflectionToken",
                "type": "address"
            }
        ],
        "name": "__ReflectionSupportStaking_init_unchained",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "rewardRate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "minStake",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxStake",
                        "type": "uint256"
                    },
                    {
                        "internalType": "contract ERC20",
                        "name": "stakingToken",
                        "type": "address"
                    },
                    {
                        "internalType": "contract ERC20",
                        "name": "rewardsToken",
                        "type": "address"
                    }
                ],
                "internalType": "struct StakingUtils.StakingConfiguration",
                "name": "config",
                "type": "tuple"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "stakeTax",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "unStakeTax",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "hpayFee",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "feeAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "hpayFeeAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "contract ERC20",
                        "name": "hpayToken",
                        "type": "address"
                    }
                ],
                "internalType": "struct StakingUtils.TaxConfiguration",
                "name": "taxConfig",
                "type": "tuple"
            },
            {
                "internalType": "uint256",
                "name": "_lockTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "penalty",
                "type": "uint256"
            }
        ],
        "name": "__StaticFixedTimeLockStaking_init",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "rewardRate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "minStake",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxStake",
                        "type": "uint256"
                    },
                    {
                        "internalType": "contract ERC20",
                        "name": "stakingToken",
                        "type": "address"
                    },
                    {
                        "internalType": "contract ERC20",
                        "name": "rewardsToken",
                        "type": "address"
                    }
                ],
                "internalType": "struct StakingUtils.StakingConfiguration",
                "name": "config",
                "type": "tuple"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "stakeTax",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "unStakeTax",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "hpayFee",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "feeAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "hpayFeeAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "contract ERC20",
                        "name": "hpayToken",
                        "type": "address"
                    }
                ],
                "internalType": "struct StakingUtils.TaxConfiguration",
                "name": "taxConfig",
                "type": "tuple"
            }
        ],
        "name": "__TaxedStaking_init",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "stakeTax",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "unStakeTax",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "hpayFee",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "feeAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "hpayFeeAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "contract ERC20",
                        "name": "hpayToken",
                        "type": "address"
                    }
                ],
                "internalType": "struct StakingUtils.TaxConfiguration",
                "name": "taxConfig",
                "type": "tuple"
            }
        ],
        "name": "__TaxedStaking_init_unchained",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "rewardRate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "minStake",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxStake",
                        "type": "uint256"
                    },
                    {
                        "internalType": "contract ERC20",
                        "name": "stakingToken",
                        "type": "address"
                    },
                    {
                        "internalType": "contract ERC20",
                        "name": "rewardsToken",
                        "type": "address"
                    }
                ],
                "internalType": "struct StakingUtils.StakingConfiguration",
                "name": "config",
                "type": "tuple"
            }
        ],
        "name": "__WhitelistedStaking_init",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "_balances",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_rewardSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "addresses",
                "type": "address[]"
            }
        ],
        "name": "addAddressToWhitelist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "allowEarlyUnlock",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "blocksLeft",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "claim",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "compound",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "configuration",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "rewardRate",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "minStake",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxStake",
                "type": "uint256"
            },
            {
                "internalType": "contract ERC20",
                "name": "stakingToken",
                "type": "address"
            },
            {
                "internalType": "contract ERC20",
                "name": "rewardsToken",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "deposits",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "earlyUnlockPenalty",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "earned",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getInfo",
        "outputs": [
            {
                "internalType": "uint256[7]",
                "name": "",
                "type": "uint256[7]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "getReflections",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleAdmin",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "hasRole",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "rewardRate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "minStake",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxStake",
                        "type": "uint256"
                    },
                    {
                        "internalType": "contract ERC20",
                        "name": "stakingToken",
                        "type": "address"
                    },
                    {
                        "internalType": "contract ERC20",
                        "name": "rewardsToken",
                        "type": "address"
                    }
                ],
                "internalType": "struct StakingUtils.StakingConfiguration",
                "name": "config",
                "type": "tuple"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "stakeTax",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "unStakeTax",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "hpayFee",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "feeAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "hpayFeeAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "contract ERC20",
                        "name": "hpayToken",
                        "type": "address"
                    }
                ],
                "internalType": "struct StakingUtils.TaxConfiguration",
                "name": "taxConfig",
                "type": "tuple"
            },
            {
                "internalType": "uint256",
                "name": "_lockTime",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_reflectionToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_earlyUnlockPenalty",
                "type": "uint256"
            }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "isWhitelisted",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lastUpdateBlock",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "lockEnded",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lockTime",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "locks",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "openForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "reflectionToken",
        "outputs": [
            {
                "internalType": "contract IERC20",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "addresses",
                "type": "address[]"
            }
        ],
        "name": "removeAddressesFromWhitelist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "_token",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_destination",
                "type": "address"
            }
        ],
        "name": "rescueTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rewardPerToken",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rewardPerTokenStored",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "rewards",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "status",
                "type": "bool"
            }
        ],
        "name": "setAllowEarlyUnlock",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_hpay",
                "type": "address"
            }
        ],
        "name": "setHpayAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tax",
                "type": "uint256"
            }
        ],
        "name": "setHpayTax",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "status",
                "type": "bool"
            }
        ],
        "name": "setOpenForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "penalty",
                "type": "uint256"
            }
        ],
        "name": "setPenalty",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "rate",
                "type": "uint256"
            }
        ],
        "name": "setRewardRate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "stakeTax",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "unstakeTax",
                "type": "uint256"
            }
        ],
        "name": "setTax",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_ownerTaxAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_hpayTaxAddress",
                "type": "address"
            }
        ],
        "name": "setTaxAddresses",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_lockTime",
                "type": "uint256"
            }
        ],
        "name": "setTimelock",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "stake",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "taxConfiguration",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "stakeTax",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "unStakeTax",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "hpayFee",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "feeAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "hpayFeeAddress",
                "type": "address"
            },
            {
                "internalType": "contract ERC20",
                "name": "hpayToken",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "timelockConfigurations",
        "outputs": [
            {
                "internalType": "uint256[2]",
                "name": "",
                "type": "uint256[2]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "topUpRewards",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "userInfo",
        "outputs": [
            {
                "internalType": "uint256[2]",
                "name": "",
                "type": "uint256[2]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "userRewardPerTokenPaid",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "initialLogic",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "initialAdmin",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "_data",
                "type": "bytes"
            }
        ],
        "stateMutability": "payable",
        "type": "constructor"
    }
];


const VAULT_1 = '0xa8F8085eeF32ce8a98f904429d43840925eDcBf1';
const VAULT_2 = '0xBeCf04CCf5a6098affDb7D2Fea3DfE353843a9C8';
const VAULT_3 = '0xd393a0D152Ad96C34E6E12F81389e8f824bF0795';
const DBT_CONTRACT = '0xCFE99cD52E9a3D9d19858ef73531d80b80C735b6';


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
var currentUser;

var token_balance = 0;

const updateAll = () => {
    updateVault("#vault-1", VAULT_1);
    updateVault("#vault-2", VAULT_2);
    updateVault("#vault-3", VAULT_3);

    tokenCheck();
};

const enableAll = () => {
    enableButtons("#vault-1");
    enableButtons("#vault-2");
    enableButtons("#vault-3");
};

const disableAll = () => {
    disableButtons("#vault-1");
    disableButtons("#vault-2");
    disableButtons("#vault-3");
};


const generalValidations = async () => {
    checkAllowance("#vault-1", VAULT_1);
    checkAllowance("#vault-2", VAULT_2);
    checkAllowance("#vault-3", VAULT_3);

    checkWihtelist("#vault-1", VAULT_1);
    checkWihtelist("#vault-2", VAULT_2);
    checkWihtelist("#vault-3", VAULT_3);
};


disableAll();

//Auto - Refreshes wallet balances every 35 seconds
var intervalId = window.setInterval(function () {
    updateAll();
    if (currentUser) {
        generalValidations();
    }
}, 35000);



//Called when site is loading.
async function init() {
    await Moralis.start({ serverUrl, appId });


    updateAll();
    currentUser = await Moralis.User.current();
    global.user_profile.entity = currentUser;
    //If User is logged in
    if (currentUser) {
        __WEB_3__ = new Web3(await Moralis.enableWeb3());
        logged_in = true;
        enableAll();
        document.getElementById("login_button").innerText = "Logout";
        userAddress = currentUser.get('ethAddress');
        document.getElementById("current-wallet").innerText = "0x..." + userAddress.slice(38);
        tokenCheck();
        setHelperData();

        document.getElementById("logged_in_info").style.display = "block";
        await generalValidations();
    }

    //If user is not logged in
    else {
        logged_in = false;
        disableAll();
        __WEB_3__ = new Web3(BLOCKCHAIN_NODE_URL);
        document.getElementById("login_button").innerText = "Sign in with MetaMask";
        document.getElementById("logged_in_info").style.display = "none";
    }
}

async function setHelperData() {
    global.user_profile.born = JSON.stringify(currentUser.createdAt);
    const options = { chain: 'bsc' };
    global.user_profile.balances = await Moralis.Web3API.account.getTokenBalances(options);
    global.user_profile.native_bal = await Moralis.Web3API.account.getNativeBalance(options);
}
//Controls the auto enable/disable of the buttons. Comment/uncomment based on how many cards you need. 
function enableButtons(id) {

    document.querySelector(id + " .btn-claim").disabled = false;
    document.querySelector(id + " .btn-approve").disabled = false;
    document.querySelector(id + " .btn-stake").disabled = false;
    document.querySelector(id + " .btn-unstake").disabled = false;
}

function disableButtons(id) {
    document.querySelector(id + " .btn-claim").disabled = true;
    document.querySelector(id + " .btn-approve").disabled = true;
    document.querySelector(id + " .btn-stake").disabled = true;
    document.querySelector(id + " .btn-unstake").disabled = true;
}

async function login() {
    try {
        currentUser = Moralis.User.current();
        if (!currentUser) {
            document.getElementById("login_button").innerText = "Authenticating...";
            currentUser = await Moralis.authenticate();
            userAddress = currentUser.get('ethAddress');
            document.getElementById("current-wallet").innerText = "0x..." + userAddress.slice(38);
            enableAll();
            tokenCheck();
            generalValidations();
            setHelperData();
            __WEB_3__ = new Web3(await Moralis.enableWeb3());
        } else {
            logOut();
        }
        document.getElementById("login_button").innerText = "Logout";
        document.getElementById("logged_in_info").style.display = "block";
        logged_in = true;


    } catch (error) {
        if (error.message == "MetaMask Message Signature: User denied message signature.") {
            alert("Login cancelled");
            document.getElementById("login_button").innerText = "Sign in with Metamask";
        }
    }

    updateAll();


}
async function logOut() {
    currentUser = await Moralis.User.logOut();
    document.getElementById("login_button").innerText = "Sign in with Metamask";
    disableAll();
    document.getElementById("logged_in_info").style.display = "none";
    updateAll();

    logged_in = false;
}

async function loginWC() {
    try {
        currentUser = Moralis.User.current();
        if (!currentUser) {
            document.getElementById("login_button_wc").innerText = "Authenticating...";
            currentUser = await Moralis.authenticate({ provider: "walletconnect", chainId: 56 });
            userAddress = currentUser.get('ethAddress');
            generalValidations();
            __WEB_3__ = new Web3(await Moralis.enableWeb3());
            document.getElementById("current-wallet").innerText = "0x..." + userAddress.slice(38);
            enableAll();
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
            alert("Login cancelled");
            document.getElementById("login_button_wc").innerText = "Sign in with WalletConnect";
        }
    }

    updateAll();
}

async function logOutWC() {
    currentUser = await Moralis.User.logOut();
    document.getElementById("login_button_wc").innerText = "Sign in with WalletConnect";
    disableAll();
    document.getElementById("logged_in_info").style.display = "none";

    updateAll();

    logged_in = false;
}

async function isApproved(address) {
    if (!currentUser) {
        return true;
    }
    const tokenContract = new __WEB_3__.eth.Contract(erc20Abi, DBT_CONTRACT);
    const account = currentUser.get('ethAddress');

    const allowance = await tokenContract.methods
        .allowance(account, address)
        .call();

    console.log('Allowance', allowance / 1e9, allowance / 1e9);

    return allowance / 1e9 >= 10_000_000;
}

async function isWhitelisted(address) {
    if (!currentUser) {
        return true;
    }
    const vaultContract = await (new __WEB_3__.eth.Contract(lockAbi, address));
    const account = currentUser.get('ethAddress');

    const result = await vaultContract.methods.isWhitelisted(account).call();
    console.log('Whitelisted', result);

    return result;
}


async function approve(address, amount) {
    if (!currentUser) {
        return;
    }
    const tokenContract = new __WEB_3__.eth.Contract(erc20Abi, DBT_CONTRACT);
    const account = currentUser.get('ethAddress');

    amount = new BigNumber('' + amount).multipliedBy(10 ** 9).toFixed();
    const gasPrice = await __WEB_3__.eth.getGasPrice();
    let args = {
        from: account,
        gasPrice: gasPrice,
        value: 0,
    };


    await tokenContract.methods
        .approve(address, amount)
        .send(args);
}

async function tokenCheck() {
    if (!currentUser) {
        return;
    }
    const tokenContract = new __WEB_3__.eth.Contract(erc20Abi, DBT_CONTRACT);
    const account = currentUser.get('ethAddress');

    const tokenBalance = await tokenContract.methods.balanceOf(account).call().then(data => data / 1e9);
    if (tokenBalance > 0) {
        has_token = true;
        token_balance = (tokenBalance);
        document.getElementById("dvt-balance-current").innerText = token_balance.toLocaleString();
    } else {
        token_balance = 0;
        document.getElementById("dvt-balance-current").innerText = token_balance.toLocaleString();
        has_token = false;
        // disableButtons("#vault-1");
    }
}


const getBlockTime = async () => {
    return __WEB_3__.eth.getBlock("latest").then(data => data.timestamp * 1000);
};

const BSC_BLOCK_TIME = 3;
const BLOCKS_PER_YEAR = new BigNumber((60 / BSC_BLOCK_TIME) * 60 * 24 * 365);

const getApr = (totalStaked, rewardsPerBlock) => {
    const totalRewardPricePerYear = new BigNumber(rewardsPerBlock).times(BLOCKS_PER_YEAR);
    const totalStakingTokenInPool = new BigNumber(Math.max(10, totalStaked));
    const apr = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100);

    let result = apr.isNaN() || !apr.isFinite() ? null : apr.toNumber();

    if (result !== null) {
        result = Math.min(result, 20000);
    }
    return result;
};

const userAmount = async (address) => {
    if (!currentUser) {
        return [0, 0, 0, 0, 0, 0];
    }
    const vaultContract = await (new __WEB_3__.eth.Contract(lockAbi, address));
    const account = currentUser.get('ethAddress');

    const result = await vaultContract.methods.userInfo(account).call();

    const decimals = 1e9;

    let reflections = await vaultContract.methods.getReflections(account).call();


    const [reward, balance] = result;

    const lock = await vaultContract.methods.locks(account).call();
    const unlocked = await vaultContract.methods.lockEnded(account).call();

    return [reward / decimals, balance / decimals, lock * 1000
        , unlocked, reflections / decimals];
};

async function getVaultInfo(address) {
    const tokenDecimals = 1e9;

    const vaultContract = await (new __WEB_3__.eth.Contract(lockAbi, address));

    const blockTime = await getBlockTime();
    const [rewardSupply, totalSupply, startTime, blocksLeft, rewardRate, maxStakingPerWallet, minStakePerWallet] = await vaultContract.methods.getInfo().call();

    const [lockTime, earlyUnlockPenalty] = await vaultContract.methods.timelockConfigurations().call();
    const returns = getApr(totalSupply / tokenDecimals, rewardRate / tokenDecimals);
    const { stakeTax, unStakeTax, hpayFee } = await vaultContract.methods.taxConfiguration().call();
    const allowEarlyUnlock = await vaultContract.methods.allowEarlyUnlock().call();
    const { stakingToken: stakeToken, rewardsToken } = await vaultContract.methods.configuration().call();
    const openForAll = await vaultContract.methods.openForAll().call();

    const vault = {
        address,
        return: returns,
        totalRewardFund: rewardSupply / tokenDecimals,
        totalLocked: totalSupply / tokenDecimals,
        maxLockPerWallet: maxStakingPerWallet / tokenDecimals,
        minLockPerWallet: minStakePerWallet / tokenDecimals,
        penalty: earlyUnlockPenalty / 100,
        stakeToken,
        rewardToken: rewardsToken,
        hpayFee: hpayFee / 100,
        stakeTax: (+stakeTax + +hpayFee) / 100,
        unStakeTax: (+unStakeTax) / 100,
        status: 0,
        allowEarlyUnlock,
        lockTime: lockTime / 60 / 60 / 24,
        blocksLeft: blocksLeft,
        openForAll,
        startTime: startTime * 1000
    };

    if (blockTime > vault.startTime) {
        vault.status = 1;
    }

    if (vault.totalRewardFund === 0) {
        vault.status = 2;
    }

    return vault;
};

//Start copy here for new card
//Be sure to change the numbers at the end of the variables
async function updateVault(id, address) {
    const vault = await getVaultInfo(address);
    const [reward, balance, lock, unlocked, reflections] = await userAmount(address);

    document.querySelector(id + " .end-time").innerText = Number(vault.blocksLeft).toLocaleString() + " Blocks";
    document.querySelector(id + " .lock-time").innerText = Number(vault.lockTime).toLocaleString() + " Days";
    document.querySelector(id + " .user-earned").innerText = Number(reward).toLocaleString() + " DBT";

    if (reflections > 0) {
        document.querySelector(id + " .user-earned-reflections").innerText = "+ " + Number(reflections).toLocaleString() + " DBT Reflections";
    }

    // document.querySelector(id + " .total-locked").innerText = Number(vault.totalLocked).toLocaleString() + " DBT";
    // document.querySelector(id + " .total-rewards").innerText = Number(vault.totalRewardFund).toLocaleString() + " DBT";
    document.querySelector(id + " .user-locked").innerText = Number(balance).toLocaleString() + " DBT";
    document.querySelector(id + " .user-apr").innerText = Number(vault.return).toLocaleString() + " %";

    try {
        document.querySelector(id + " .early-withdraw-penalty").innerText = Number(vault.penalty).toLocaleString() + " %";
    } catch (error) {

    }

    if (lock > 0) {
        document.querySelector(id + " .user-lock-end").innerText = new Date(lock).toLocaleString();
    } else {
        document.querySelector(id + " .user-lock-end").innerText = 'Nothing to unlock';

    }
    document.querySelector(id + " .btn-claim").disabled = reward === 0;

}

async function stake(address, amount) {
    if (!currentUser) {
        return;
    }
    const account = currentUser.get('ethAddress');

    const gasPrice = await __WEB_3__.eth.getGasPrice();
    const args = {
        from: account,
        gasPrice: gasPrice,
        value: 0,
    };

    amount = new BigNumber(amount).multipliedBy(10 ** 9).toFixed();
    const vaultContract = new __WEB_3__.eth.Contract(lockAbi, address);

    await vaultContract.methods.stake('' + amount).estimateGas(args);

    const result = vaultContract.methods.stake(amount).send(args);
    return result;
}

async function unstake(address, amount) {
    if (!currentUser) {
        return;
    }
    const gasPrice = await __WEB_3__.eth.getGasPrice();
    const account = currentUser.get('ethAddress');

    const args = {
        from: account,
        gasPrice: gasPrice,
        value: 0
    };

    amount = new BigNumber(amount).multipliedBy(10 ** 9).toFixed();
    const vaultContract = await (new __WEB_3__.eth.Contract(lockAbi, address));

    await vaultContract.methods.withdraw(amount).estimateGas(args);
    const result = vaultContract.methods.withdraw(amount).send(args);
    return result;
}

async function claim(id, address) {
    if (!currentUser) {
        return;
    }
    const gasPrice = await __WEB_3__.eth.getGasPrice();
    const account = currentUser.get('ethAddress');

    const args = {
        from: account,
        gasPrice: gasPrice,
        value: 0
    };
    const vaultContract = await (new __WEB_3__.eth.Contract(lockAbi, address));

    await vaultContract.methods.claim().estimateGas(args);
    await vaultContract.methods.claim().send(args);
    await updateVault(id, address);

}

async function checkWihtelist(id, address) {
    const whitelisted = await isWhitelisted(address);
    if (!whitelisted) {
        document.querySelector(id + " .stake-amount-wrapper").style.display = 'none';
        document.querySelector(id + " #not-whitelisted").style.display = 'block';
    } else {
        document.querySelector(id + " .stake-amount-wrapper").style.display = 'block';
        document.querySelector(id + " #not-whitelisted").style.display = 'none';
    }
}

async function checkAllowance(id, address) {
    const approved = await isApproved(address);
    console.log(approved, "approved");
    if (!approved) {
        document.querySelector(id + " .btn-approve").style.display = 'block';
        document.querySelector(id + " .btn-approve").onclick = async function () {
            await approve(address, 100_000_000_000_000);
            setTimeout(async () => {
                await checkAllowance(id, address);
                await updateVault(id, address);
            }, 700);

        };
        console.log(document.querySelector(id + " .btn-stake"));
        document.querySelector(id + " .btn-stake").style.display = 'none';
        document.querySelector(id + " .btn-unstake").style.display = 'none';
    } else {
        document.querySelector(id + " .btn-approve").style.display = 'none';
        document.querySelector(id + " .btn-stake").style.display = 'block';
        document.querySelector(id + " .btn-unstake").style.display = 'block';
        document.querySelector(id + " .btn-stake").onclick = async function () {

            const amount = document.querySelector(id + " #stake-amount").value;
            const vault = await getVaultInfo(address);

            document.querySelector(id + " #error-msg").innerText = '';
            console.log(token_balance);
            if (token_balance < amount) {
                document.querySelector(id + " #error-msg").innerText = 'Insufficient Balance';
                return;
            }

            if (vault.minLockPerWallet > 0 && vault.minLockPerWallet > amount) {
                document.querySelector(id + " #error-msg").innerText = 'Minumum amount is ' + vault.minLockPerWallet + ' DBT';
                return;
            }

            if (vault.maxLockPerWallet > 0 && vault.maxLockPerWallet < amount) {
                document.querySelector(id + " #error-msg").innerText = 'Maximum amount is ' + vault.maxLockPerWallet + ' DBT';
                return;
            }

            asyncAction(id, address, async () => {
                await stake(address, amount);
                await checkAllowance(id, address);
                await updateVault(id, address);
            });
        };

        document.querySelector(id + " .btn-unstake").onclick = async function () {
            const amount = document.querySelector(id + " #stake-amount").value;
            document.querySelector(id + " #error-msg").innerText = '';
            const [reward, balance, lock, unlocked, reflections] = await userAmount(address);

            if (balance < amount) {
                document.querySelector(id + " #error-msg").innerText = 'Insufficient Balance';
                return;
            }

            asyncAction(id, address, async () => {
                await unstake(address, amount);
                await checkAllowance(id, address);
                await updateVault(id, address);
            });


        };
    }
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

//document.getElementById("modal_close").onclick = closeModal;

//This what faciliates the links between the HTML buttons and the javascript functions, uncomment or add/remove as needed when you add new cards in the HTML
document.getElementById("lg").onclick = logOut;
document.getElementById("login_button").onclick = login;
document.getElementById("login_button_wc").onclick = loginWC;
document.querySelector("#vault-1 .btn-claim").onclick = async function () {
    asyncAction('#vault-1', VAULT_1,
        async () => await claim('#vault-1', VAULT_1)
    );
};
document.querySelector("#vault-2 .btn-claim").onclick = function () {
    asyncAction('#vault-2', VAULT_2,
        async () => await claim('#vault-2', VAULT_2)
    );

};

document.querySelector("#vault-3 .btn-claim").onclick = function () {
    asyncAction('#vault-3', VAULT_3,
        async () => await claim('#vault-3', VAULT_3)
    );
};



const asyncAction = async (id, address, fn) => {
    disableButtons("#vault-1");
    disableButtons("#vault-2");
    disableButtons("#vault-3");

    try {
        await fn();
    } catch (error) {
        console.log(error);
    }
    enableButtons("#vault-1");
    enableButtons("#vault-2");
    enableButtons("#vault-3");
};

