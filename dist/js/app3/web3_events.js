
window.ethereum.on('accountsChanged', function (accounts) {

    getAccount()
})

window.ethereum.on('networkChanged', function (networkId) {
    console.log('networkChanged', networkId);
    const stringNetworkId = networkId.toString()
    if (stringNetworkId !== "3000") {
    }
    if (stringNetworkId === "3000") {
        if (typeof (networkId) === typeof (0)) {

        } else {

        }
        document.getElementById("enableMeta").hidden = false
    }
    
});

async function getNetworkId() {
    const network = await web3Instance.eth.net.getId()
    const stringNetworkId = network.toString()
    if (stringNetworkId !== "4") {
    }
    if (stringNetworkId === "4") {
        if (typeof (networkId) === typeof (0)) {

        } else {

        }
    }
}
// getNetworkId()