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

const marketplace_abi = [
    {
        "type": "constructor",
        "stateMutability": "nonpayable",
        "inputs": []
    },
    {
        "type": "event",
        "name": "MarketItemCreated",
        "inputs": [
            {
                "type": "uint256",
                "name": "marketItemId",
                "internalType": "uint256",
                "indexed": true
            },
            {
                "type": "address",
                "name": "nftContract",
                "internalType": "address",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256",
                "indexed": true
            },
            {
                "type": "address",
                "name": "creator",
                "internalType": "address",
                "indexed": false
            }, {
                "type": "address",
                "name": "seller",
                "internalType": "address",
                "indexed": false
            }, {
                "type": "address",
                "name": "owner",
                "internalType": "address",
                "indexed": false
            }, {
                "type": "uint256",
                "name": "price",
                "internalType": "uint256",
                "indexed": false
            }, {
                "type": "bool",
                "name": "sold",
                "internalType": "bool",
                "indexed": false
            }, {
                "type": "bool",
                "name": "canceled",
                "internalType": "bool",
                "indexed": false
            }
        ],
        "anonymous": false
    },
    {
        "type": "function",
        "stateMutability": "payable",
        "outputs": [],
        "name": "cancelMarketItem",
        "inputs": [
            {
                "type": "address",
                "name": "nftContractAddress",
                "internalType": "address"
            }, {
                "type": "uint256",
                "name": "marketItemId",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "payable",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "createMarketItem",
        "inputs": [
            {
                "type": "address",
                "name": "nftContractAddress",
                "internalType": "address"
            }, {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            }, {
                "type": "uint256",
                "name": "price",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "payable",
        "outputs": [],
        "name": "createMarketSale",
        "inputs": [
            {
                "type": "address",
                "name": "nftContractAddress",
                "internalType": "address"
            }, {
                "type": "uint256",
                "name": "marketItemId",
                "internalType": "uint256"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "tuple[]",
                "name": "",
                "internalType": "struct ECHPunks_Marketplace.MarketItem[]",
                "components": [
                    {
                        "type": "uint256",
                        "name": "marketItemId",
                        "internalType": "uint256"
                    },
                    {
                        "type": "address",
                        "name": "nftContractAddress",
                        "internalType": "address"
                    },
                    {
                        "type": "uint256",
                        "name": "tokenId",
                        "internalType": "uint256"
                    },
                    {
                        "type": "address",
                        "name": "creator",
                        "internalType": "address payable"
                    }, {
                        "type": "address",
                        "name": "seller",
                        "internalType": "address payable"
                    }, {
                        "type": "address",
                        "name": "owner",
                        "internalType": "address payable"
                    }, {
                        "type": "uint256",
                        "name": "price",
                        "internalType": "uint256"
                    }, {
                        "type": "bool",
                        "name": "sold",
                        "internalType": "bool"
                    }, {
                        "type": "bool",
                        "name": "canceled",
                        "internalType": "bool"
                    }
                ]
            }
        ],
        "name": "fetchAvailableMarketItems",
        "inputs": []
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "tuple[]",
                "name": "",
                "internalType": "struct ECHPunks_Marketplace.MarketItem[]",
                "components": [
                    {
                        "type": "uint256",
                        "name": "marketItemId",
                        "internalType": "uint256"
                    },
                    {
                        "type": "address",
                        "name": "nftContractAddress",
                        "internalType": "address"
                    },
                    {
                        "type": "uint256",
                        "name": "tokenId",
                        "internalType": "uint256"
                    },
                    {
                        "type": "address",
                        "name": "creator",
                        "internalType": "address payable"
                    }, {
                        "type": "address",
                        "name": "seller",
                        "internalType": "address payable"
                    }, {
                        "type": "address",
                        "name": "owner",
                        "internalType": "address payable"
                    }, {
                        "type": "uint256",
                        "name": "price",
                        "internalType": "uint256"
                    }, {
                        "type": "bool",
                        "name": "sold",
                        "internalType": "bool"
                    }, {
                        "type": "bool",
                        "name": "canceled",
                        "internalType": "bool"
                    }
                ]
            }
        ],
        "name": "fetchMarketItemsByAddressProperty",
        "inputs": [
            {
                "type": "string",
                "name": "_addressProperty",
                "internalType": "string"
            }, {
                "type": "address",
                "name": "ownerOrSeller",
                "internalType": "address"
            }
        ]
    }, {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "tuple[]",
                "name": "",
                "internalType": "struct ECHPunks_Marketplace.MarketItem[]",
                "components": [
                    {
                        "type": "uint256",
                        "name": "marketItemId",
                        "internalType": "uint256"
                    },
                    {
                        "type": "address",
                        "name": "nftContractAddress",
                        "internalType": "address"
                    },
                    {
                        "type": "uint256",
                        "name": "tokenId",
                        "internalType": "uint256"
                    },
                    {
                        "type": "address",
                        "name": "creator",
                        "internalType": "address payable"
                    }, {
                        "type": "address",
                        "name": "seller",
                        "internalType": "address payable"
                    }, {
                        "type": "address",
                        "name": "owner",
                        "internalType": "address payable"
                    }, {
                        "type": "uint256",
                        "name": "price",
                        "internalType": "uint256"
                    }, {
                        "type": "bool",
                        "name": "sold",
                        "internalType": "bool"
                    }, {
                        "type": "bool",
                        "name": "canceled",
                        "internalType": "bool"
                    }
                ]
            }
        ],
        "name": "fetchOwnedMarketItems",
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
                "type": "tuple[]",
                "name": "",
                "internalType": "struct ECHPunks_Marketplace.MarketItem[]",
                "components": [
                    {
                        "type": "uint256",
                        "name": "marketItemId",
                        "internalType": "uint256"
                    },
                    {
                        "type": "address",
                        "name": "nftContractAddress",
                        "internalType": "address"
                    },
                    {
                        "type": "uint256",
                        "name": "tokenId",
                        "internalType": "uint256"
                    },
                    {
                        "type": "address",
                        "name": "creator",
                        "internalType": "address payable"
                    }, {
                        "type": "address",
                        "name": "seller",
                        "internalType": "address payable"
                    }, {
                        "type": "address",
                        "name": "owner",
                        "internalType": "address payable"
                    }, {
                        "type": "uint256",
                        "name": "price",
                        "internalType": "uint256"
                    }, {
                        "type": "bool",
                        "name": "sold",
                        "internalType": "bool"
                    }, {
                        "type": "bool",
                        "name": "canceled",
                        "internalType": "bool"
                    }
                ]
            }
        ],
        "name": "fetchSellingMarketItems",
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
                "type": "tuple",
                "name": "",
                "internalType": "struct ECHPunks_Marketplace.MarketItem",
                "components": [
                    {
                        "type": "uint256",
                        "name": "marketItemId",
                        "internalType": "uint256"
                    },
                    {
                        "type": "address",
                        "name": "nftContractAddress",
                        "internalType": "address"
                    },
                    {
                        "type": "uint256",
                        "name": "tokenId",
                        "internalType": "uint256"
                    },
                    {
                        "type": "address",
                        "name": "creator",
                        "internalType": "address payable"
                    }, {
                        "type": "address",
                        "name": "seller",
                        "internalType": "address payable"
                    }, {
                        "type": "address",
                        "name": "owner",
                        "internalType": "address payable"
                    }, {
                        "type": "uint256",
                        "name": "price",
                        "internalType": "uint256"
                    }, {
                        "type": "bool",
                        "name": "sold",
                        "internalType": "bool"
                    }, {
                        "type": "bool",
                        "name": "canceled",
                        "internalType": "bool"
                    }
                ]
            }, {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ],
        "name": "getLatestMarketItemByTokenId",
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
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "getListingFee",
        "inputs": []
    }
]

const abi2 = [{"type":"constructor","stateMutability":"nonpayable","inputs":[]},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"approved","internalType":"address","indexed":true},{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":true}],"anonymous":false},{"type":"event","name":"ApprovalForAll","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"operator","internalType":"address","indexed":true},{"type":"bool","name":"approved","internalType":"bool","indexed":false}],"anonymous":false},{"type":"event","name":"MakePurchasable","inputs":[{"type":"bool","name":"isPurchasable","internalType":"bool","indexed":false}],"anonymous":false},{"type":"event","name":"Mint","inputs":[{"type":"address","name":"account","internalType":"address","indexed":false},{"type":"uint256","name":"number","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"SetCurrentBatch","inputs":[{"type":"uint256","name":"newCurrentBatch","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"SetErc20Cost","inputs":[{"type":"uint256","name":"newErc20Cost","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"SetErc20Token","inputs":[{"type":"address","name":"newErc20Token","internalType":"address","indexed":false}],"anonymous":false},{"type":"event","name":"SetMaxMintable","inputs":[{"type":"uint256","name":"newMax","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"SetMetadata","inputs":[{"type":"uint256","name":"batchNumber","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"tokenId","internalType":"uint256","indexed":true}],"anonymous":false},{"type":"event","name":"Whitelisted","inputs":[{"type":"address","name":"account","internalType":"address","indexed":false},{"type":"bool","name":"isWhitelisted","internalType":"bool","indexed":false}],"anonymous":false},{"type":"event","name":"Withdraw","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":false},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"approve","inputs":[{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"owner","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"currentBatch","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"currentPrice","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"erc20Cost","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"erc20Token","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"getApproved","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isApprovedForAll","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"operator","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"isPurchasable","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"makePurchable","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"maxMintable","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"metadata","internalType":"string"},{"type":"uint256","name":"price1","internalType":"uint256"},{"type":"uint256","name":"price2","internalType":"uint256"},{"type":"uint256","name":"price3","internalType":"uint256"},{"type":"uint256","name":"price4","internalType":"uint256"},{"type":"uint256","name":"ratio1","internalType":"uint256"},{"type":"uint256","name":"ratio2","internalType":"uint256"},{"type":"uint256","name":"ratio3","internalType":"uint256"}],"name":"meta","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"payable","outputs":[],"name":"mint","inputs":[{"type":"uint256","name":"mints","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"ownerOf","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"renounceOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"safeTransferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"safeTransferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"},{"type":"bytes","name":"_data","internalType":"bytes"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setApprovalForAll","inputs":[{"type":"address","name":"operator","internalType":"address"},{"type":"bool","name":"approved","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setCurrentBatch","inputs":[{"type":"uint256","name":"newCurrentBatch","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setErc20Cost","inputs":[{"type":"uint256","name":"newErc20Cost","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setErc20Token","inputs":[{"type":"address","name":"newErc20Token","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setMaxMintable","inputs":[{"type":"uint256","name":"newMax","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setMetadata","inputs":[{"type":"uint256","name":"batchNumber","internalType":"uint256"},{"type":"string","name":"newMetadata","internalType":"string"},{"type":"uint256","name":"price1","internalType":"uint256"},{"type":"uint256","name":"price2","internalType":"uint256"},{"type":"uint256","name":"price3","internalType":"uint256"},{"type":"uint256","name":"price4","internalType":"uint256"},{"type":"uint256","name":"ratio1","internalType":"uint256"},{"type":"uint256","name":"ratio2","internalType":"uint256"},{"type":"uint256","name":"ratio3","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"supportsInterface","inputs":[{"type":"bytes4","name":"interfaceId","internalType":"bytes4"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tokenByIndex","inputs":[{"type":"uint256","name":"index","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"tokenOfOwnerByIndex","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"uint256","name":"index","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"tokenURI","inputs":[{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256[]","name":"","internalType":"uint256[]"}],"name":"tokensByOwner","inputs":[{"type":"address","name":"account","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"tokenId","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"whitelistAccount","inputs":[{"type":"address","name":"account","internalType":"address"},{"type":"bool","name":"isWhitelisted","internalType":"bool"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"whitelisted","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdraw","inputs":[]},{"type":"receive","stateMutability":"payable"}]

const game_abi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"gameNumber","type":"uint256"}],"name":"Draw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"gameNumber","type":"uint256"}],"name":"GameOver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"gameNumber","type":"uint256"},{"indexed":false,"internalType":"bool","name":"defend","type":"bool"},{"indexed":false,"internalType":"bool","name":"attack","type":"bool"}],"name":"Player1AttacksAndDefends","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"gameNumber","type":"uint256"},{"indexed":false,"internalType":"bool","name":"defend","type":"bool"},{"indexed":false,"internalType":"bool","name":"attack","type":"bool"}],"name":"Player2AttacksAndDefends","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"player1Address","type":"address"},{"indexed":false,"internalType":"address","name":"player2Address","type":"address"},{"indexed":false,"internalType":"uint256","name":"playerNumber","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"gameNumber","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isGameLive","type":"bool"}],"name":"PlayerJoined","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldGameWager","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"gameWager","type":"uint256"}],"name":"WagerAmountChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"gameNumber","type":"uint256"}],"name":"WithdrawWinnings","type":"event"},{"inputs":[{"internalType":"uint256","name":"newWagerAmount","type":"uint256"}],"name":"changeGameWager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"checkModulo","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"clearPlayer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"commitTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"gameNumber","type":"uint256"},{"internalType":"bytes32","name":"secretHash","type":"bytes32"}],"name":"commitVote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"gameNumber","type":"uint256"}],"name":"earlyEndGame","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"gameNumber","type":"uint256"}],"name":"endDraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"gameByAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gameCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gameWager","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"gameWinner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"games","outputs":[{"internalType":"bool","name":"gameIsLive","type":"bool"},{"internalType":"uint256","name":"gameTurn","type":"uint256"},{"internalType":"address","name":"player1","type":"address"},{"internalType":"address","name":"player2","type":"address"},{"internalType":"uint256","name":"roundStartTime","type":"uint256"},{"internalType":"uint256","name":"player1Hp","type":"uint256"},{"internalType":"uint256","name":"player2Hp","type":"uint256"},{"internalType":"bool","name":"isPlayer1Revealed","type":"bool"},{"internalType":"bool","name":"isPlayer2Revealed","type":"bool"},{"internalType":"bool","name":"isPlayer1Committed","type":"bool"},{"internalType":"bool","name":"isPlayer2Committed","type":"bool"},{"internalType":"bytes32","name":"Player1Commit","type":"bytes32"},{"internalType":"bytes32","name":"Player2Commit","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gen1Contract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gen2Contract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBlockTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"gameNumber","type":"uint256"}],"name":"getGameMoves","outputs":[{"internalType":"uint256[4]","name":"Player1Attacks","type":"uint256[4]"},{"internalType":"uint256[4]","name":"Player1Defends","type":"uint256[4]"},{"internalType":"uint256[4]","name":"Player2Attacks","type":"uint256[4]"},{"internalType":"uint256[4]","name":"Player2Defends","type":"uint256[4]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[4]","name":"attacks","type":"uint256[4]"},{"internalType":"uint256[4]","name":"defends","type":"uint256[4]"},{"internalType":"uint256","name":"salt","type":"uint256"}],"name":"getHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isInGame","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isPlayerOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"joinGame","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"gameNumber","type":"uint256"}],"name":"loserWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"newGamesAvailable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"playerOneTrue","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"players","outputs":[{"internalType":"address","name":"currentContract","type":"address"},{"internalType":"uint256","name":"currentNFTNumber","type":"uint256"},{"internalType":"uint256","name":"totalWins","type":"uint256"},{"internalType":"uint256","name":"totalLosses","type":"uint256"},{"internalType":"bool","name":"isPlayable","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"gameNumber","type":"uint256"},{"internalType":"uint256[4]","name":"attacks","type":"uint256[4]"},{"internalType":"uint256[4]","name":"defends","type":"uint256[4]"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"revealVote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"setCommitTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"contractNumber","type":"uint256"}],"name":"setContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"gen1or2","type":"address"},{"internalType":"uint256","name":"nftNumber","type":"uint256"}],"name":"setPlayer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"setRevealTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stopGames","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"gameNumber","type":"uint256"}],"name":"winnerWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]