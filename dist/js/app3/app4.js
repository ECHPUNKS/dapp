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
    let _totalSupply, _tokensByOwner, _isApproved, _ECHP_Balance;
    // _metadata = promisify(metadata_ => ECHPUNKS_NFT_Contract_Contract.methods.metadata().call(metadata_))
    _totalSupply = promisify(totalSupply_ => ECHPUNKS_NFT_Contract.methods.totalSupply().call(totalSupply_))
    _tokensByOwner = promisify(tokensByOwner_ => ECHPUNKS_NFT_Contract.methods.tokensByOwner(currentAccount).call(tokensByOwner_))
    _isApproved = promisify(isApproved_ => ECHP_Contract.methods.allowance(currentAccount, ECHPUNKS_NFT_address).call(isApproved_))
    _ECHP_Balance = promisify(ECHP_Balance_ => ECHP_Contract.methods.balanceOf(currentAccount).call(ECHP_Balance_))

    Promise.all([_totalSupply, _tokensByOwner, _isApproved, _ECHP_Balance])



    .then(function ([totalSupply, tokensByOwner, isApproved, ECHP_Balance]) {
        const readECHPBalance = parseInt(ECHP_Balance) / 10 ** 9
        document.getElementById('ECHP_Balance').innerHTML = "<p>ECHP Balance<br>" + readECHPBalance + "</p>"

        document.getElementById('buy_echp_div').hidden = false;
        document.getElementById('nft_info_card').hidden = false
        // console.log('is approved for ' + parseInt(isApproved))

        if (totalSupply >= 30) {
            document.getElementById('current_price').innerHTML = ".04" 
        } else if (totalSupply >= 20) {
            document.getElementById('current_price').innerHTML = ".03"
        } else if (totalSupply >= 10) {
            document.getElementById('current_price').innerHTML = ".02"
        } else {
            document.getElementById('current_price').innerHTML = ".01"
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
    showAccount.innerHTML = "<p>Wallet:<br>" + account.match(/.{1,15}/g)[0] + "...</p>"

    if (network === 4) { // rinkeby=4  ech=3000
        showBalance.innerHTML = "<p>Rinkeby ETH:<br>" + read.toFixed(5) + "</p>"
        return currentAccount;
    } else {
        loadDataButton.innerHTML = "Switch to Rinkeby Network and Try Again"
    }
}

ECHPUNKS_NFT_Contract.events.NFTMinted({fromBlock: "latest"}).on("connected", function (subscriptionId) {
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
