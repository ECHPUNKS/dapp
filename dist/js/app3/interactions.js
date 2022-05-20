
let totalSupplyForPrice;
// console.log('supply for price:: ' + totalSupplyForPrice)


function approve_account() {
    ECHP_Contract.methods.approve(ECHPUNKS_NFT_address, "100000000000000000000000000").send({from: currentAccount})
    .on('transactionHash', tx => {
        // disableButtons()
        document.getElementById('approve_button_button').disabled = true;

    })
    .then(receipt => {
        // console.log('Mined', receipt)
        if (receipt.status == '0x1' || receipt.status == 1) {
            console.log('Transaction Successful')
            getAccount()
        }
        else {
            document.getElementById('approve_button_button').disabled = false;

        }
    })
    .catch(err => {
        console.log('Error', err)
    })
    .finally(() => {
        console.log('approve function finished, returning')
        return
    })
}

const findPrice = () => {
    if (totalSupplyForPrice >= 30) {
        return 40000000000000000
    } else if (totalSupplyForPrice >= 20) {
        return 30000000000000000
    } else if (totalSupplyForPrice >= 10) {
        return 20000000000000000
    } else {
        return 10000000000000000
    }
}

console.log('Current Price in ECH = ' + findPrice())

function publicMint() {
    console.log('supply for price:: ' + totalSupplyForPrice)

    ECHPUNKS_NFT_Contract.methods.mint(totalSupplyForPrice).send({from: currentAccount, value: findPrice()})

    .on('transactionHash', tx => {
        console.log("Transaction: ", tx);
        disableButtons()
    })
    .then(receipt => {
        console.log('Mined', receipt)
        getAccount()
        enableButtons()
    })
    .catch(err => {
        console.log('Error', err)
        getAccount()
    })
    .finally(() => {
        console.log('is this returning?')
        return
    })
}