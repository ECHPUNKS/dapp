const ethereumButton = document.querySelector('.enableEthereumButton');
// let totalSupplyForPrice = 0
// console.log('supply for price ' + typeof(totalSupplyForPrice))

ethereumButton.addEventListener('click', () => {
    document.getElementById('enableMeta').hidden = true
document.getElementById('load_button_div').hidden = false


    console.log('getting account')
    getAccount()
})
let currentAccount = ""

let myTokensArray = {}
let MyMetadataArray = []
async function getAccount() {
    const network = await web3Instance.eth.net.getId()
    console.log(network)
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    const account = accounts[0]
    console.log('account: ', account)
    currentAccount = account
    console.log('currentAccount: ', currentAccount)

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
        myTokensArray = tokensByOwner
        console.log(myTokensArray)
            

        for (i = 0; i < myTokensArray.length; i ++) {
            fetch('./../../assets/data/metadata/' + myTokensArray[i]).then(response => {

                return response.json();
            }).then(data => {
                // document.getElementById("demo").innerHTML = data;
                MyMetadataArray.push(data)
                console.log(data);
            }).catch(err => { // Do something for an error here
            });
        }

// document.getElementById('load_button_div').hidden = false;
// document.getElementById('connect_button_div').hidden = true;




        // }
        
        // console.log('_tokensByOwner::  ' + tokensByOwner.length)
        // if (tokensByOwner.length >= 1) {
        //     // document.getElementById('punksDisplay').innerHTML = tokensByOwner
        //     document.getElementById('myPunks').innerHTML = "";
        //     for (i = 0; i <tokensByOwner.length; i++) {
                
        //         $(
        //             "<div class='col-4'>" +
        //             "<img style='max-width:100%;max-height:100%;' class='mb-2 mr-2' src='./../../assets/images/testpunks/" + (parseInt(i) + 1).toString() + ".png'>" +
        //             "<p>#" + tokensByOwner[i] + "</p>" +
        //             "</div>"
        //         ).appendTo('#myPunks');
        //     }
        // } else {
        //     document.getElementById('myPunks').innerHTML = "You don't own any ECHPunks"
        // }
    // loadMetadata()
    console.log('mymetadata  ',MyMetadataArray)
    })
    showAccount.innerHTML = "<p>Wallet:<br>" + account.match(/.{1,15}/g)[0] + "...</p>"

    if (network === 4) { // rinkeby=4  ech=3000
        showBalance.innerHTML = "<p>Rinkeby ETH:<br>" + read.toFixed(5) + "</p>"
        return currentAccount;
    } else {
        loadDataButton.innerHTML = "Switch to Rinkeby Network and Try Again"
    }

}


const loadMetadata = () => {
document.getElementById('button_column').hidden = true;

console.log('length ',myTokensArray.length)

    for(i=0; i<myTokensArray.length; i++) {
        $(
            "<div class='col-12 col-md-4'>" +
                "<img style='max-width:100%;max-height:100%;' class='mb-2 mr-2' src='./../../assets/images/testpunks/" + myTokensArray[i] + ".png'>" +

                // "<p>#" + myTokensArray[i] + "</p>" +
                "<p>" + MyMetadataArray[i].name + "</p>" +
                "<p>Background: " + MyMetadataArray[i].attributes[0].value + "</p>" +
                "<p>Skin: " + MyMetadataArray[i].attributes[1].value + "</p>" +
                "<p>Eyes: " + MyMetadataArray[i].attributes[2].value + "</p>" +
                "<p>Hair/Hat: " + MyMetadataArray[i].attributes[3].value + "</p>" +
                "<p>Mouth: " + MyMetadataArray[i].attributes[4].value + "</p>" +
                "<p>Outfit: " + MyMetadataArray[i].attributes[5].value + "</p>" +
                "<p>Accessory: " + MyMetadataArray[i].attributes[6].value + "</p>" +
                "<p>- - -</p>" +
            "</div>"
        ).appendTo('#myPunks');
    }
}






ECHPUNKS_NFT_Contract.events.NFTMinted({fromBlock: "latest"}).on("connected", function (subscriptionId) {
    console.log('callback')
    console.log(subscriptionId);
    
    return;
}).on('data', function (event) {
    console.log('data')
    console.log(event); // same results as the optional callback above
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
    console.log(typeof(currentMint))
    console.log(currentMint)
    $('#image_display').attr("src", "./../../assets/images/testpunks/" + (parseInt(currentMint)+1).toString() + ".png")
    return
}

async function bestFetch(metadataNumber) {
    try {
        const first = await fetch('./../../assets/data/metadata/' + metadataNumber.toString()); // <-- wait for the fetch to finish and return the resolved value.
        let json = await first.json(); // <-- use the const first, not first_name
        console.log(json.dna);
        return json;

    } catch (e) {
        console.log('Error!', e);
    }
}
