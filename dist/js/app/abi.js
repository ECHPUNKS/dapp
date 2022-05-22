const abi = [
    {
        "type": "constructor",
        "stateMutability": "nonpayable",
        "inputs": []
    },
    {
        "type": "event",
        "name": "Approval",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "internalType": "address",
                "indexed": true
            }, {
                "type": "address",
                "name": "approved",
                "internalType": "address",
                "indexed": true
            }, {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256",
                "indexed": true
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "ApprovalForAll",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "internalType": "address",
                "indexed": true
            }, {
                "type": "address",
                "name": "operator",
                "internalType": "address",
                "indexed": true
            }, {
                "type": "bool",
                "name": "approved",
                "internalType": "bool",
                "indexed": false
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "MakePurchasable",
        "inputs": [
            {
                "type": "bool",
                "name": "isPurchasable",
                "internalType": "bool",
                "indexed": false
            }
        ],
        "anonymous": false
    }, {
        "type": "event",
        "name": "Mint",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "internalType": "address",
                "indexed": false
            }, {
                "type": "uint256",
                "name": "number",
                "internalType": "uint256",
                "indexed": false
            }
        ],
        "anonymous": false
    }, {
        "type": "event",
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "type": "address",
                "name": "previousOwner",
                "internalType": "address",
                "indexed": true
            }, {
                "type": "address",
                "name": "newOwner",
                "internalType": "address",
                "indexed": true
            }
        ],
        "anonymous": false
    }, {
        "type": "event",
        "name": "SetCurrentBatch",
        "inputs": [
            {
                "type": "uint256",
                "name": "newCurrentBatch",
                "internalType": "uint256",
                "indexed": false
            }
        ],
        "anonymous": false
    }, {
        "type": "event",
        "name": "SetErc20Cost",
        "inputs": [
            {
                "type": "uint256",
                "name": "newErc20Cost",
                "internalType": "uint256",
                "indexed": false
            }
        ],
        "anonymous": false
    }, {
        "type": "event",
        "name": "SetErc20Token",
        "inputs": [
            {
                "type": "address",
                "name": "newErc20Token",
                "internalType": "address",
                "indexed": false
            }
        ],
        "anonymous": false
    }, {
        "type": "event",
        "name": "SetMaxMintable",
        "inputs": [
            {
                "type": "uint256",
                "name": "newMax",
                "internalType": "uint256",
                "indexed": false
            }
        ],
        "anonymous": false
    }, {
        "type": "event",
        "name": "SetMetadata",
        "inputs": [
            {
                "type": "uint256",
                "name": "batchNumber",
                "internalType": "uint256",
                "indexed": false
            }
        ],
        "anonymous": false
    }, {
        "type": "event",
        "name": "Transfer",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "internalType": "address",
                "indexed": true
            }, {
                "type": "address",
                "name": "to",
                "internalType": "address",
                "indexed": true
            }, {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256",
                "indexed": true
            }
        ],
        "anonymous": false
    }, {
        "type": "event",
        "name": "Withdraw",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "internalType": "address",
                "indexed": false
            }, {
                "type": "uint256",
                "name": "amount",
                "internalType": "uint256",
                "indexed": false
            }
        ],
        "anonymous": false
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "approve",
        "inputs": [
            {
                "type": "address",
                "name": "to",
                "internalType": "address"
            }, {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "balanceOf",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "internalType": "address"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "currentBatch",
        "inputs": []
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "currentPrice",
        "inputs": []
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "erc20Cost",
        "inputs": []
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "erc20Token",
        "inputs": []
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "getApproved",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ],
        "name": "isApprovedForAll",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "internalType": "address"
            }, {
                "type": "address",
                "name": "operator",
                "internalType": "address"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ],
        "name": "isPurchasable",
        "inputs": []
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "makePurchable",
        "inputs": []
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "maxMintable",
        "inputs": []
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "string",
                "name": "metadata",
                "internalType": "string"
            },
            {
                "type": "uint256",
                "name": "batchSize",
                "internalType": "uint256"
            },
            {
                "type": "uint256",
                "name": "currentMint",
                "internalType": "uint256"
            },
            {
                "type": "uint256",
                "name": "price1",
                "internalType": "uint256"
            }, {
                "type": "uint256",
                "name": "price2",
                "internalType": "uint256"
            }, {
                "type": "uint256",
                "name": "price3",
                "internalType": "uint256"
            }, {
                "type": "uint256",
                "name": "price4",
                "internalType": "uint256"
            }, {
                "type": "uint256",
                "name": "ratio1",
                "internalType": "uint256"
            }, {
                "type": "uint256",
                "name": "ratio2",
                "internalType": "uint256"
            }, {
                "type": "uint256",
                "name": "ratio3",
                "internalType": "uint256"
            }
        ],
        "name": "meta",
        "inputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "payable",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "mint",
        "inputs": [
            {
                "type": "uint256",
                "name": "nftNumber",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "string",
                "name": "",
                "internalType": "string"
            }
        ],
        "name": "name",
        "inputs": []
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "owner",
        "inputs": []
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "ownerOf",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "renounceOwnership",
        "inputs": []
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "safeTransferFrom",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "internalType": "address"
            }, {
                "type": "address",
                "name": "to",
                "internalType": "address"
            }, {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "safeTransferFrom",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "internalType": "address"
            }, {
                "type": "address",
                "name": "to",
                "internalType": "address"
            }, {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            }, {
                "type": "bytes",
                "name": "_data",
                "internalType": "bytes"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setApprovalForAll",
        "inputs": [
            {
                "type": "address",
                "name": "operator",
                "internalType": "address"
            }, {
                "type": "bool",
                "name": "approved",
                "internalType": "bool"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setCurrentBatch",
        "inputs": [
            {
                "type": "uint256",
                "name": "newCurrentBatch",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setErc20Cost",
        "inputs": [
            {
                "type": "uint256",
                "name": "newErc20Cost",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setErc20Token",
        "inputs": [
            {
                "type": "address",
                "name": "newErc20Token",
                "internalType": "address"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setMaxMintable",
        "inputs": [
            {
                "type": "uint256",
                "name": "newMax",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setMetadata",
        "inputs": [
            {
                "type": "uint256",
                "name": "batchNumber",
                "internalType": "uint256"
            },
            {
                "type": "string",
                "name": "newMetadata",
                "internalType": "string"
            },
            {
                "type": "uint256",
                "name": "newBatchSize",
                "internalType": "uint256"
            },
            {
                "type": "uint256",
                "name": "price1",
                "internalType": "uint256"
            }, {
                "type": "uint256",
                "name": "price2",
                "internalType": "uint256"
            }, {
                "type": "uint256",
                "name": "price3",
                "internalType": "uint256"
            }, {
                "type": "uint256",
                "name": "price4",
                "internalType": "uint256"
            }, {
                "type": "uint256",
                "name": "ratio1",
                "internalType": "uint256"
            }, {
                "type": "uint256",
                "name": "ratio2",
                "internalType": "uint256"
            }, {
                "type": "uint256",
                "name": "ratio3",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ],
        "name": "supportsInterface",
        "inputs": [
            {
                "type": "bytes4",
                "name": "interfaceId",
                "internalType": "bytes4"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "string",
                "name": "",
                "internalType": "string"
            }
        ],
        "name": "symbol",
        "inputs": []
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "tokenByIndex",
        "inputs": [
            {
                "type": "uint256",
                "name": "index",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "tokenOfOwnerByIndex",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "internalType": "address"
            }, {
                "type": "uint256",
                "name": "index",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "string",
                "name": "",
                "internalType": "string"
            }
        ],
        "name": "tokenURI",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256[]",
                "name": "",
                "internalType": "uint256[]"
            }
        ],
        "name": "tokensByOwner",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "internalType": "address"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "totalSupply",
        "inputs": []
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "transferFrom",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "internalType": "address"
            }, {
                "type": "address",
                "name": "to",
                "internalType": "address"
            }, {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "transferOwnership",
        "inputs": [
            {
                "type": "address",
                "name": "newOwner",
                "internalType": "address"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "withdraw",
        "inputs": []
    }, {
        "type": "receive",
        "stateMutability": "payable"
    }
]

