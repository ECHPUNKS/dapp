const web3Instance = new Web3(window['ethereum']);

if (typeof window.ethereum !== 'undefined') {
    console.log('metamask is installed!')
} else {
    console.log('install metamask')
    document.querySelector('.enableEthereumButton').innerHTML = '<a target="_blank" href="https://www.metamask.io">Install Metamask</a>'
}



// ECHP TESTNET
const ECHP_address = '0x7E66d5243f5e2d317F0E0fC91484566fDdf978c5';
const ECHP_address_abi = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldRouter","type":"address"},{"indexed":false,"internalType":"address","name":"newRouter","type":"address"}],"name":"UpdatedRouter","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"blacklistAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deadAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxWalletAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferRfi","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddr","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"rescueAnyECH20Tokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"weiAmount","type":"uint256"}],"name":"rescueECH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rfi","type":"uint256"},{"internalType":"uint256","name":"_marketing","type":"uint256"},{"internalType":"uint256","name":"_liquidity","type":"uint256"},{"internalType":"uint256","name":"_burn","type":"uint256"}],"name":"setTaxes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tax","type":"uint256"}],"name":"setTeamTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapTokensAtAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"taxes","outputs":[{"internalType":"uint256","name":"rfi","type":"uint256"},{"internalType":"uint256","name":"marketing","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"burn","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totFeesPaid","outputs":[{"internalType":"uint256","name":"rfi","type":"uint256"},{"internalType":"uint256","name":"marketing","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"burn","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateMaxTxAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateMaxWalletBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newRouter","type":"address"},{"internalType":"address","name":"newPair","type":"address"}],"name":"updateRouterAndPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"updateSwapEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateSwapTokensAtAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newWallet","type":"address"}],"name":"updatemarketingWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"whitelistAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]');

const ECHP_Contract = new web3Instance.eth.Contract(ECHP_address_abi, ECHP_address);

// ECHPUNKS_NFT Contract
const ECHPUNKS_NFT_address = '0x575289807a7b1103c6133e7b5A999afCf650f7e1';
const ECHPUNKS_NFT_address_abi = abi;
const ECHPUNKS_NFT_Contract = new web3Instance.eth.Contract(ECHPUNKS_NFT_address_abi, ECHPUNKS_NFT_address);

const promisify = (inner) => new Promise((resolve, reject) => inner((err, res) => {
    if (err) {
        reject(err)
    } else {
        resolve(res);
    }
}));

window.ethereum.on('accountsChanged', function (accounts) {

    getAccount()
})

window.ethereum.on('networkChanged', function (networkId) {
    console.log('networkChanged', networkId);
    const stringNetworkId = networkId.toString()
    if (stringNetworkId !== "3000") {}
    if (stringNetworkId === "3000") {
        if (typeof(networkId) === typeof(0)) {} else {}
        document.getElementById("enableMeta").hidden = false
    }

});

async function getNetworkId() {
    const network = await web3Instance.eth.net.getId()
    const stringNetworkId = network.toString()
    if (stringNetworkId !== "4") {}
    if (stringNetworkId === "4") {
        if (typeof(networkId) === typeof(0)) {} else {}
    }
}

let totalSupplyForPrice;
// console.log('supply for price:: ' + totalSupplyForPrice)


function approve_account() {
    ECHP_Contract.methods.approve(ECHPUNKS_NFT_address, "100000000000000000000000000").send({from: currentAccount}).on('transactionHash', tx => { // disableButtons()
        document.getElementById('approve_button_button').disabled = true;

    }).then(receipt => { // console.log('Mined', receipt)
        if (receipt.status == '0x1' || receipt.status == 1) {
            console.log('Transaction Successful')
            getAccount()
        } else {
            document.getElementById('approve_button_button').disabled = false;

        }
    }).catch(err => {
        console.log('Error', err)
    }). finally(() => {
        console.log('approve function finished, returning')
        return
    })
}

const findPrice = () => {
    if (totalSupplyForPrice >= 30) { // 750
        return 40000000000000000 // 700000000000000000000
    } else if (totalSupplyForPrice >= 20) { // 500
        return 30000000000000000 // 600000000000000000000
    } else if (totalSupplyForPrice >= 10) { // 250
        return 20000000000000000 // 500000000000000000000
    } else {
        return 10000000000000000 // 400000000000000000000
    }
}

console.log('Current Price in ECH = ' + findPrice())

function publicMint() {
    console.log('supply for price:: ' + typeof(totalSupplyForPrice))

    ECHPUNKS_NFT_Contract.methods.mint((parseInt(totalSupplyForPrice) + 1).toString()).send({from: currentAccount, value: findPrice()}).on('transactionHash', tx => {
        console.log("Transaction: ", tx);
        disableButtons()
    }).then(receipt => {
        console.log('Mined', receipt)
        getAccount()
        enableButtons()
    }).catch(err => {
        console.log('Error', err)
        getAccount()
    }). finally(() => {
        console.log('is this returning?')
        return
    })
}



const ethereumButton = document.querySelector('.enableEthereumButton');
// let totalSupplyForPrice = 0
// console.log('supply for price ' + typeof(totalSupplyForPrice))

ethereumButton.addEventListener('click', () => {
    document.getElementById('enableMeta').hidden = true
    // console.log('getting account')
    getAccount()
})
let currentAccount = ""
async function getAccount() {
    const network = await web3Instance.eth.net.getId()
    // console.log(network)
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    const account = accounts[0]
    // console.log('account: ', account)
    currentAccount = account
    // console.log('currentAccount: ', currentAccount)

    const balance = await window.ethereum
        .request({
            method: 'eth_getBalance',
            params: [account, "latest"]
        })
    const read = parseInt(balance) / 10 ** 18
    let _totalSupply, _tokensByOwner, _isApproved, _ECHP_Balance, _isPurchasable;
    // _metadata = promisify(metadata_ => ECHPUNKS_NFT_Contract_Contract.methods.metadata().call(metadata_))
    _totalSupply = promisify(totalSupply_ => ECHPUNKS_NFT_Contract.methods.totalSupply().call(totalSupply_))
    __isPurchasable = promisify(isPurchasable_ => ECHPUNKS_NFT_Contract.methods.isPurchasable().call(isPurchasable_))


    _tokensByOwner = promisify(tokensByOwner_ => ECHPUNKS_NFT_Contract.methods.tokensByOwner(currentAccount).call(tokensByOwner_))
    _isApproved = promisify(isApproved_ => ECHP_Contract.methods.allowance(currentAccount, ECHPUNKS_NFT_address).call(isApproved_))
    _ECHP_Balance = promisify(ECHP_Balance_ => ECHP_Contract.methods.balanceOf(currentAccount).call(ECHP_Balance_))

    Promise.all([_totalSupply, _tokensByOwner, _isApproved, _ECHP_Balance, _isPurchasable])



    .then(function ([totalSupply, tokensByOwner, isApproved, ECHP_Balance, isPurchasable]) {
        const readECHPBalance = parseInt(ECHP_Balance) / 10 ** 9
        document.getElementById('ECHP_Balance').innerHTML = "<p>My ECHP Balance<br>" + readECHPBalance + "</p>"
        // console.log(isPurchasable)

        if (!isPurchasable) {
            document.getElementById('mint_button').disabled = true
        }

        document.getElementById('buy_echp_div').hidden = false;
        document.getElementById('nft_info_card').hidden = false
        // console.log('is approved for ' + parseInt(isApproved))

        if (totalSupply >= 30) {
            document.getElementById('current_price').innerHTML = "700" 
        } else if (totalSupply >= 20) {
            document.getElementById('current_price').innerHTML = "600"
        } else if (totalSupply >= 10) {
            document.getElementById('current_price').innerHTML = "500"
        } else {
            document.getElementById('current_price').innerHTML = "400"
        }
        
        
        document.getElementById('current_mint_card').hidden = false
        document.getElementById('current_mint_number').innerHTML = parseInt(totalSupply) + 1
        
        // console.log('totalsupply::  ' + totalSupply)
        totalSupplyForPrice = totalSupply;

        getImage(parseInt(totalSupply))
        
        if (totalSupply == 1000) {
            document.getElementById('mint_button').disabled = true
            document.getElementById('mint_button').innerHTML = "Sold Out"
            
        }
        
        // console.log('_tokensByOwner::  ' + tokensByOwner.length)
        document.getElementById('my_echpunks_div').hidden = false

        if (tokensByOwner.length >= 1) {
            // document.getElementById('punksDisplay').innerHTML = tokensByOwner
            document.getElementById('myPunks').innerHTML = "";
            for (i = 0; i <tokensByOwner.length; i++) {
                
                $(
                    "<div class='col-4'>" +
                    "<img style='max-width:100%;max-height:100%;' class='mb-2 mr-2' src='./../../assets/images/testpunks/" + tokensByOwner[i]+ ".png'>" +
                    "<p>#" + tokensByOwner[i] + "</p>" +
                    "</div>"
                ).appendTo('#myPunks');
            }
        } else {
            document.getElementById('myPunks').innerHTML = "You don't own any ECHPunks"
        }
        
        if (parseInt(isApproved) >= 10000000000) {
            document.getElementById('approve_button').hidden = true
            document.getElementById('mint_button').disabled = false
            
        } else {
            document.getElementById('approve_button').hidden = false
            document.getElementById('mint_button').disabled = true
        }
        
    })
    showAccount.innerHTML = "<p>My Wallet:<br>" + account.match(/.{1,15}/g)[0] + "...</p>"

    if (network === 4) { // rinkeby=4  ech=3000
        showBalance.innerHTML = "<p>My ECH Balance:<br>" + read.toFixed(5) + "</p>"
        return currentAccount;
    } else {
        loadDataButton.innerHTML = "Switch to Rinkeby Network and Try Again"
    }
}

ECHPUNKS_NFT_Contract.events.Mint({fromBlock: "latest"}).on("connected", function (subscriptionId) {
    // console.log('callback')
    // console.log(subscriptionId);
    
    return;
}).on('data', function (event) {
    // console.log('data')
    // console.log(event); // same results as the optional callback above
    getAccount()
    return
    // }
}).on('changed', function (event) {
    // remove event from local database
}).on('error', function (error, receipt) { // If the
});

const disableButtons = () => {
    document.getElementById('mint_button').disabled = true;
}
const enableButtons = () => {
    document.getElementById('mint_button').disabled = false;
}

const getImage = (currentMint) => {
    // console.log(typeof(currentMint))
    // console.log(currentMint)
    $('#image_display').attr("src", "./../../assets/images/testpunks/" + (parseInt(currentMint)+1).toString() + ".png")
    return
}

async function bestFetch(metadataNumber) {
    try {
        const first = await fetch('./../../assets/data/metadata/' + metadataNumber.toString()); // <-- wait for the fetch to finish and return the resolved value.
        let json = await first.json(); // <-- use the const first, not first_name
        // console.log(json.dna);
        return json;

    } catch (e) {
        console.log('Error!', e);
    }
}
