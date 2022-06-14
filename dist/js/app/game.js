
// Connect to metamask
const web3Instance = new Web3(window['ethereum']);

if (typeof window.ethereum !== 'undefined') {
    console.log('metamask is installed!')
} else {
    console.log('install metamask')
    document.querySelector('.enableEthereumButton').innerHTML = '<a target="_blank" href="https://www.metamask.io">Install Metamask</a>'
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// Contracts
// const ECHP_address = '0xCe2643C6180e857BcE12B850cC5e89FC3B34fF0F';
const ECHP_address = '0x7E66d5243f5e2d317F0E0fC91484566fDdf978c5';
const ECHP_address_abi = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldRouter","type":"address"},{"indexed":false,"internalType":"address","name":"newRouter","type":"address"}],"name":"UpdatedRouter","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"blacklistAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deadAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"marketingWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxWalletAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferRfi","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddr","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"rescueAnyECH20Tokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"weiAmount","type":"uint256"}],"name":"rescueECH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"contract IRouter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rfi","type":"uint256"},{"internalType":"uint256","name":"_marketing","type":"uint256"},{"internalType":"uint256","name":"_liquidity","type":"uint256"},{"internalType":"uint256","name":"_burn","type":"uint256"}],"name":"setTaxes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tax","type":"uint256"}],"name":"setTeamTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapTokensAtAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"taxes","outputs":[{"internalType":"uint256","name":"rfi","type":"uint256"},{"internalType":"uint256","name":"marketing","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"burn","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totFeesPaid","outputs":[{"internalType":"uint256","name":"rfi","type":"uint256"},{"internalType":"uint256","name":"marketing","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"burn","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateMaxTxAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateMaxWalletBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newRouter","type":"address"},{"internalType":"address","name":"newPair","type":"address"}],"name":"updateRouterAndPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"updateSwapEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateSwapTokensAtAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newWallet","type":"address"}],"name":"updatemarketingWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"whitelistAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]');
const ECHP_Contract = new web3Instance.eth.Contract(ECHP_address_abi, ECHP_address);


const ECHPUNKS_NFT_address = '0xf87c07700ad109b54d52D226Eb56FfBB29060c71';
// const ECHPUNKS_NFT_address = '0xecEF3593b33EB4056673f48263B5072C444fb618';
const ECHPUNKS_NFT_address_abi = abi;
const ECHPUNKS_NFT_Contract = new web3Instance.eth.Contract(ECHPUNKS_NFT_address_abi, ECHPUNKS_NFT_address);

//rinkeby
// const ECHPUNKS_NFT2_address = '0x59b62377D9ba3f4fB4F4df8Ec2b771984CEaf86c';
const ECHPUNKS_NFT2_address = '0xa7a1169567628326C9c9A3A63944B1845255f738';
const ECHPUNKS_NFT2_address_abi = abi2;
const ECHPUNKS_NFT2_Contract = new web3Instance.eth.Contract(ECHPUNKS_NFT2_address_abi, ECHPUNKS_NFT2_address);

const GAME_address = '0xA91E9461EDD0436534B62472bd9F3AC21248AB08';
const GAME_address_abi = game_abi;
const GAME_Contract = new web3Instance.eth.Contract(GAME_address_abi, GAME_address);

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// Promisify
const promisify = (inner) => new Promise((resolve, reject) => inner((err, res) => {
    if (err) {
        reject(err)
    } else {
        resolve(res);
    }
}));

document.getElementById('hair_attack').checked = false;
document.getElementById('hair_defend').checked = false;
document.getElementById('eyes_attack').checked = false;
document.getElementById('eyes_defend').checked = false;
document.getElementById('nose_attack').checked = false;
document.getElementById('nose_defend').checked = false;
document.getElementById('nipple_attack').checked = false;
document.getElementById('nipple_defend').checked = false;

disableChecks()

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// Accounts Changed
window.ethereum.on('accountsChanged', function (accounts) {
    getAccount()
})

window.ethereum.on('networkChanged', function (networkId) {
    console.log('networkChanged', networkId);
    const stringNetworkId = networkId.toString()
    if (stringNetworkId !== "4") {}
    if (stringNetworkId === "4") {
        if (typeof(networkId) === typeof(0)) {} else {}
        document.getElementById("enableMeta").hidden = false
    }
});

async function getNetworkId() {
    const network = await web3Instance.eth.net.getId()
    const stringNetworkId = network.toString()
    if (stringNetworkId !== "4") {} // 4
    if (stringNetworkId === "4") { // 4
        if (typeof(networkId) === typeof(0)) {} else {}
    }
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

const ethereumButton = document.querySelector('.enableEthereumButton');
// let totalSupplyForPrice = 0
// console.log('supply for price ' + typeof(totalSupplyForPrice))

ethereumButton.addEventListener('click', () => {
    document.getElementById('enableMeta').hidden = true
    // console.log('getting account')
    getAccount()
})

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

let currentAccount = ""


// get data for connected wallet
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

    // fetch contract data
    let _totalSupply, _tokensByOwner, _isApproved, _ECHP_Balance, _isPurchasable, _tokensByOwner2, _isInGame, _isPlayerOwner;
    _totalSupply = promisify(totalSupply_ => ECHPUNKS_NFT2_Contract.methods.totalSupply().call(totalSupply_))
    _isPurchasable = promisify(isPurchasable_ => ECHPUNKS_NFT2_Contract.methods.isPurchasable().call(isPurchasable_))
    _tokensByOwner = promisify(tokensByOwner_ => ECHPUNKS_NFT_Contract.methods.tokensByOwner(currentAccount).call(tokensByOwner_))
    _tokensByOwner2 = promisify(tokensByOwner2_ => ECHPUNKS_NFT2_Contract.methods.tokensByOwner(currentAccount).call(tokensByOwner2_))
    _isApproved = promisify(isApproved_ => ECHP_Contract.methods.allowance(currentAccount, ECHPUNKS_NFT2_address).call(isApproved_))
    _ECHP_Balance = promisify(ECHP_Balance_ => ECHP_Contract.methods.balanceOf(currentAccount).call(ECHP_Balance_))
    _isInGame = promisify(isInGame_ => GAME_Contract.methods.gameByAddress(currentAccount).call(isInGame_))
    _isPlayerOwner = promisify(isPlayerOwner_ => GAME_Contract.methods.isPlayerOwner(currentAccount).call(isPlayerOwner_))

    Promise.all([_totalSupply, _tokensByOwner, _isApproved, _ECHP_Balance, _isPurchasable, _tokensByOwner2, _isInGame, _isPlayerOwner])
    .then(function ([totalSupply, tokensByOwner, isApproved, ECHP_Balance, isPurchasable, tokensByOwner2, isInGame, isPlayerOwner]) {
    // console.log(tokensByOwner2.length)
        // globalTotalSupply = totalSupply
        console.log('is in game ',isInGame)
        const readECHPBalance = parseInt(ECHP_Balance) / 10 ** 9
        document.getElementById('ECHP_Balance').innerHTML = "<p>My ECHP Balance<br>" + readECHPBalance + "</p>"
        console.log(isPlayerOwner)
        if (isInGame != 0) {
                document.getElementById('join_game').hidden = true
                myGameNumber = isInGame
                updateLiveGame(myGameNumber)
        } else {
            if (isPlayerOwner.toUpperCase() == currentAccount.toUpperCase()) {
                document.getElementById('join_game').hidden = false
                document.getElementById('live_feed').innerHTML = "PLEASE JOIN A GAME"
            } else {
                document.getElementById('live_feed').innerHTML = "MUST SET NFT BEFORE STARTING GAMES"
                document.getElementById('join_game').hidden = true

            }
            disableChecks()
        }
    })

    showAccount.innerHTML = "<p>My Wallet:<br>" + account.match(/.{1,15}/g)[0] + "...</p>"

    if (network === 4) { // rinkeby=4  ech=4
        showBalance.innerHTML = "<p>My ECH Balance:<br>" + read.toFixed(5) + "</p>"
        return currentAccount;
    } else {
        loadDataButton.innerHTML = "Switch to Rinkeby Network and Try Again"
    }

}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

const getImage = (currentMint) => {
    $('#image_display').attr("src", "./../../assets/images/testpunks/" + (parseInt(currentMint)+1).toString() + ".png")
    return
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

async function bestFetch(metadataNumber) {
    try {
        const first = await fetch('./../../assets/data/metadata/' + metadataNumber.toString());
        let json = await first.json();
        return json;
    } catch (e) {
        console.log('Error!', e);
    }
}

let counter = 0

function refreshAccount() {
    setTimeout(() => {
        counter++
        console.log('refresh', counter)
        getAccount()
        return;
    }, "10000")
}

// console.log(Math.round((Math.floor(Math.random() * 100) + 1) / 1) * 1)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(getRandomInt(1,100000000000))
let myRandomNumber = 0
let myAttackArray = []
let myDefendArray = []
/// COMMIT
function getHashFromContract() {
    // document.getElementById('commit_button').disabled = true
    console.log(attackArray)
    const attacks = attackArray.toString()
    const defends = defendArray.toString()
    canEnable = false
    disableChecks()

    if (
        (attacks == [1,1,2,2].toString() ||
        attacks == [2,2,1,1].toString() ||
        attacks == [1,2,1,2].toString() ||
        attacks == [2,1,2,1].toString() ||
        attacks == [1,2,2,1].toString() ||
        attacks == [2,1,1,2].toString()) &&
        (defends == [1,1,2,2].toString() ||
        defends == [2,2,1,1].toString() ||
        defends == [1,2,1,2].toString() ||
        defends == [2,1,2,1].toString() ||
        defends == [1,2,2,1].toString() ||
        defends == [2,1,1,2].toString())
    ) {
        document.getElementById('commit_button').disabled = true
        document.getElementById('commit_error_message').hidden = true
        const randomNumber = getRandomInt(1,1000000000000)
        myRandomNumber = randomNumber
        myAttackArray = attackArray
        myDefendArray = defendArray
        console.log(typeof(myAttackArray[0]))
        let _getHash
        _getHash = promisify(getHash_ => GAME_Contract.methods.getHash(attackArray,defendArray,myRandomNumber).call(getHash_))

        Promise.all([_getHash])
        .then(function ([getHash]) {
            console.log(getHash)
            // document.getElementById('my_random_number').innerHTML = myRandomNumber

            localStorage.setItem("myGameNumber", myGameNumber)
            localStorage.setItem("myRandomNumber", myRandomNumber)
            localStorage.setItem("myAttackArray", JSON.stringify(myAttackArray))
            localStorage.setItem("myDefendArray", JSON.stringify(myDefendArray))
            localStorage.setItem("getHash", getHash[0])
            localStorage.setItem("block#forHash", getHash[1])
            // GAME_Contract.methods.commitVote(myGameNumber,getHash).send({from: currentAccount}).on('transactionHash', tx => {
            GAME_Contract.methods.commitVote(myGameNumber,getHash[0]).send({from: currentAccount}).on('transactionHash', tx => {

            }).then(receipt => {
                if (receipt.status == '0x1' || receipt.status == 1) {
                    console.log('Transaction Successful')
                    document.getElementById('commit_button').hidden = true
                    document.getElementById('commit_button').disabled = false
                    canEnable = true
                }
            }).catch(err => {
                console.log('Error', err)
                document.getElementById('commit_button').disabled = false
                canEnable = true
                enableChecks()
            }). finally(() => {
                console.log('approve function finished, returning')
                return
            })
        })
    } else {
        document.getElementById('commit_error_message').hidden = false
    }


}

let attackArray = [0,0,0,0]

function getAttackValue() {

    const checkBox1 = document.getElementById("hair_attack");
    const checkBox2 = document.getElementById("eyes_attack");
    const checkBox3 = document.getElementById("nose_attack");
    const checkBox4 = document.getElementById("nipple_attack");
    // console.log(checkBox1.checked)
    if (checkBox1.checked) {
        attackArray[0] = 2
    } else {
        attackArray[0] = 1
    }
    if (checkBox2.checked) {
        attackArray[1] = 2
    } else {
        attackArray[1] = 1
    }
    if (checkBox3.checked) {
        attackArray[2] = 2
    } else {
        attackArray[2] = 1
    }
    if (checkBox4.checked) {
        attackArray[3] = 2
    } else {
        attackArray[3] = 1
    }

    console.log(attackArray)

}
let defendArray = [0,0,0,0]

function getDefendValue() {

    const checkBox1 = document.getElementById("hair_defend");
    const checkBox2 = document.getElementById("eyes_defend");
    const checkBox3 = document.getElementById("nose_defend");
    const checkBox4 = document.getElementById("nipple_defend");
    // console.log(checkBox1.checked)
    if (checkBox1.checked) {
        defendArray[0] = 2
    } else {
        defendArray[0] = 1
    }
    if (checkBox2.checked) {
        defendArray[1] = 2
    } else {
        defendArray[1] = 1
    }
    if (checkBox3.checked) {
        defendArray[2] = 2
    } else {
        defendArray[2] = 1
    }
    if (checkBox4.checked) {
        defendArray[3] = 2
    } else {
        defendArray[3] = 1
    }

    console.log(defendArray)

}

let myGameNumber = 0
let testObject = []
function joinAGame() {

    document.getElementById('join_game').disabled = true;
    GAME_Contract.methods.joinGame().send({from: currentAccount, value: 10000000000000000}).on('transactionHash', tx => {

    }).then(receipt => {
        if (receipt.status == '0x1' || receipt.status == 1) {
            console.log('Transaction Successful')
            document.getElementById('join_game').hidden = true;
            document.getElementById('join_game').disabled = false;
            console.log(receipt)
            testObject = receipt
            myGameNumber = testObject.events.PlayerJoined.returnValues.gameNumber
            updateLiveGame(myGameNumber)
        } else {
            // document.getElementById('approve_button_button').disabled = false;

        }
    }).catch(err => {
        // console.log('Error', err)
        document.getElementById('join_game').disabled = false;
    }). finally(() => {
        console.log('approve function finished, returning')
        return
    })

}

function getGameCount() {
    let _gameCount
        _gameCount = promisify(gameCount_ => GAME_Contract.methods.gameCount().call(gameCount_))

        Promise.all([_gameCount])
        .then(function ([gameCount]) {
            console.log(gameCount)
            return;
        })
}

function gameCountLoop() {
    setTimeout(() => {
        getGameCount()
        gameCountLoop()
        return
    }, 3000);
}
// gameCountLoop()

function disableChecks() {
    document.getElementById("hair_defend").disabled = true
    document.getElementById("eyes_defend").disabled = true
    document.getElementById("nose_defend").disabled = true
    document.getElementById("nipple_defend").disabled = true

    document.getElementById("hair_attack").disabled = true
    document.getElementById("eyes_attack").disabled = true
    document.getElementById("nose_attack").disabled = true
    document.getElementById("nipple_attack").disabled = true
}
let canEnable = true
function enableChecks() {
    if (canEnable == true) {
        document.getElementById("hair_defend").disabled = false
        document.getElementById("eyes_defend").disabled = false
        document.getElementById("nose_defend").disabled = false
        document.getElementById("nipple_defend").disabled = false

        document.getElementById("hair_attack").disabled = false
        document.getElementById("eyes_attack").disabled = false
        document.getElementById("nose_attack").disabled = false
        document.getElementById("nipple_attack").disabled = false
    }
}

let currentAttackAndDefends = {}
let currentGameStats = {}
let gameMove = 1
function updateLiveGame(gameNumber) {
    setTimeout(() => {
        
        let _games, _gameMoves, _winner
            _games = promisify(games_ => GAME_Contract.methods.games(gameNumber).call(games_))
            _gameMoves = promisify(gameMoves_ => GAME_Contract.methods.getGameMoves(gameNumber).call(gameMoves_))
            _winner = promisify(winner_ => GAME_Contract.methods.gameWinner(gameNumber).call(winner_))

            Promise.all([_games,_gameMoves, _winner])
            .then(function ([games, gameMoves, winner]) {
                console.log(games.gameTurn)
                if (games.gameTurn == 0) {
                    document.getElementById('previous_round').innerHTML = 0
                } else {
                    document.getElementById('previous_round').innerHTML = games.gameTurn - 1
                }
                document.getElementById('current_round').innerHTML = games.gameTurn
            // console.log(typeof(gameMoves))
                if (winner != "0x0000000000000000000000000000000000000000") {
                    document.getElementById('winner_div').hidden = false
                    if (winner.toUpperCase() == currentAccount.toUpperCase()) {
                        document.getElementById('withdraw_winner_button').hidden = false
                        document.getElementById('loser_exit_button').hidden = true
                        
                    } else {
                        document.getElementById('withdraw_winner_button').hidden = true
                        document.getElementById('loser_exit_button').hidden = false

                    }
                } else {
                    document.getElementById('winner_div').hidden = true
                }
                if (games.player1.toUpperCase() == currentAccount.toUpperCase()) {
                    document.getElementById('my_player_number').innerHTML = "1"
                }
                if (games.player2.toUpperCase() == currentAccount.toUpperCase()) {
                    document.getElementById('my_player_number').innerHTML = "2"
                }

                if (games.gameTurn != gameMove) {
                    console.log('previous round score calculated, displaying in previous round section')
                    gameMove = games.gameTurn
                    //p1
                    if (JSON.parse(gameMoves[0][0]) == 1) {
                        document.getElementById('p1_attacks_hair').innerHTML = "X"
                    } else {
                        document.getElementById('p1_attacks_hair').innerHTML = "&#10003;"
                    }
                    if (JSON.parse(gameMoves[0][1]) == 1) {
                        document.getElementById('p1_attacks_eyes').innerHTML = "X"
                    } else {
                        document.getElementById('p1_attacks_eyes').innerHTML = "&#10003;"
                    }
                    if (JSON.parse(gameMoves[0][2]) == 1) {
                        document.getElementById('p1_attacks_nose').innerHTML = "X"
                    } else {
                        document.getElementById('p1_attacks_nose').innerHTML = "&#10003;"
                    }
                    if (JSON.parse(gameMoves[0][3]) == 1) {
                        document.getElementById('p1_attacks_nipple').innerHTML = "X"
                    } else {
                        document.getElementById('p1_attacks_nipple').innerHTML = "&#10003;"
                    }
                    if (JSON.parse(gameMoves[1][0]) == 1) {
                        document.getElementById('p1_defends_hair').innerHTML = "X"
                    } else {
                        document.getElementById('p1_defends_hair').innerHTML = "&#10003;"
                    }
                    if (JSON.parse(gameMoves[1][1]) == 1) {
                        document.getElementById('p1_defends_eyes').innerHTML = "X"
                    } else {
                        document.getElementById('p1_defends_eyes').innerHTML = "&#10003;"
                    }
                    if (JSON.parse(gameMoves[1][2]) == 1) {
                        document.getElementById('p1_defends_nose').innerHTML = "X"
                    } else {
                        document.getElementById('p1_defends_nose').innerHTML = "&#10003;"
                    }
                    if (JSON.parse(gameMoves[1][3]) == 1) {
                        document.getElementById('p1_defends_nipple').innerHTML = "X"
                    } else {
                        document.getElementById('p1_defends_nipple').innerHTML = "&#10003;"
                    }
                    //p2
                    if (JSON.parse(gameMoves[2][0]) == 1) {
                        document.getElementById('p2_attacks_hair').innerHTML = "X"
                    } else {
                        document.getElementById('p2_attacks_hair').innerHTML = "&#10003;"
                    }
                    if (JSON.parse(gameMoves[2][1]) == 1) {
                        document.getElementById('p2_attacks_eyes').innerHTML = "X"
                    } else {
                        document.getElementById('p2_attacks_eyes').innerHTML = "&#10003;"
                    }
                    if (JSON.parse(gameMoves[2][2]) == 1) {
                        document.getElementById('p2_attacks_nose').innerHTML = "X"
                    } else {
                        document.getElementById('p2_attacks_nose').innerHTML = "&#10003;"
                    }
                    if (JSON.parse(gameMoves[2][3]) == 1) {
                        document.getElementById('p2_attacks_nipple').innerHTML = "X"
                    } else {
                        document.getElementById('p2_attacks_nipple').innerHTML = "&#10003;"
                    }
                    if (JSON.parse(gameMoves[3][0]) == 1) {
                        document.getElementById('p2_defends_hair').innerHTML = "X"
                    } else {
                        document.getElementById('p2_defends_hair').innerHTML = "&#10003;"
                    }
                    if (JSON.parse(gameMoves[3][1]) == 1) {
                        document.getElementById('p2_defends_eyes').innerHTML = "X"
                    } else {
                        document.getElementById('p2_defends_eyes').innerHTML = "&#10003;"
                    }
                    if (JSON.parse(gameMoves[3][2]) == 1) {
                        document.getElementById('p2_defends_nose').innerHTML = "X"
                    } else {
                        document.getElementById('p2_defends_nose').innerHTML = "&#10003;"
                    }
                    if (JSON.parse(gameMoves[3][3]) == 1) {
                        document.getElementById('p2_defends_nipple').innerHTML = "X"
                    } else {
                        document.getElementById('p2_defends_nipple').innerHTML = "&#10003;"
                    }
                    let player1Deductions = 0
                    let player2Deductions = 0
                    //score
                        // player 1 defends hair, player 2 attacks hair
                    if (JSON.parse(gameMoves[1][0]) == 1 && JSON.parse(gameMoves[2][0]) == 2) {
                        document.getElementById('my_hair_point_deduction').innerHTML = "-1"
                        player1Deductions--
                    } else {
                        document.getElementById('my_hair_point_deduction').innerHTML = "0"
                    }
                        // player 1 defends eyes, player 2 attacks eyes
                    if (JSON.parse(gameMoves[1][1]) == 1 && JSON.parse(gameMoves[2][1]) == 2) {
                        document.getElementById('my_eyes_point_deduction').innerHTML = "-1"
                        player1Deductions--
                    } else {
                        document.getElementById('my_eyes_point_deduction').innerHTML = "0"
                    }
                        // player 1 defends nose, player 2 attacks nose
                    if (JSON.parse(gameMoves[1][2]) == 1 && JSON.parse(gameMoves[2][2]) == 2) {
                        document.getElementById('my_nose_point_deduction').innerHTML = "-1"
                        player1Deductions--
                    } else {
                        document.getElementById('my_nose_point_deduction').innerHTML = "0"
                    }
                        // player 1 defends nipple, player 2 attacks nipple
                    if (JSON.parse(gameMoves[1][3]) == 1 && JSON.parse(gameMoves[2][3]) == 2) {
                        document.getElementById('my_nipple_point_deduction').innerHTML = "-1"
                        player1Deductions--
                    } else {
                        document.getElementById('my_nipple_point_deduction').innerHTML = "0"
                    }
                        // player 2 defends hair, player 1 attacks hair
                    if (JSON.parse(gameMoves[3][0]) == 1 && JSON.parse(gameMoves[0][0]) == 2) {
                        document.getElementById('my_hair_point_hits').innerHTML = "-1"
                        player2Deductions--
                    } else {
                        document.getElementById('my_hair_point_hits').innerHTML = "0"
                    }
                    if (JSON.parse(gameMoves[3][1]) == 1 && JSON.parse(gameMoves[0][1]) == 2) {
                        document.getElementById('my_eyes_point_hits').innerHTML = "-1"
                        player2Deductions--
                    } else {
                        document.getElementById('my_eyes_point_hits').innerHTML = "0"
                    }
                    if (JSON.parse(gameMoves[3][2]) == 1 && JSON.parse(gameMoves[0][2]) == 2) {
                        document.getElementById('my_nose_point_hits').innerHTML = "-1"
                        player2Deductions--
                    } else {
                        document.getElementById('my_nose_point_hits').innerHTML = "0"
                    }
                    if (JSON.parse(gameMoves[3][3]) == 1 && JSON.parse(gameMoves[0][3]) == 2) {
                        document.getElementById('my_nipple_point_hits').innerHTML = "-1"
                        player2Deductions--
                    } else {
                        document.getElementById('my_nipple_point_hits').innerHTML = "0"
                    }
                    document.getElementById('player1_point_deduction').innerHTML = player1Deductions
                    document.getElementById('player2_point_deduction').innerHTML = player2Deductions
                }
                document.getElementById('gameIsLive').innerHTML = games.gameIsLive
                document.getElementById('player1Hp').innerHTML = games.player1Hp
                document.getElementById('player2Hp').innerHTML = games.player2Hp
                document.getElementById('winner').innerHTML = winner
                // if player 1
                if (games.player1.toUpperCase() == currentAccount.toUpperCase()) {
                    if (games.isPlayer1Committed == false && games.isPlayer2Committed == false &&
                        games.isPlayer1Revealed == false && games.isPlayer2Revealed == false ) {
                        document.getElementById('live_feed').innerHTML = "CHOOSE YOUR ATTACK AND DEFENDS.."
                        document.getElementById('commit_button').hidden = false
                        document.getElementById('reveal_button').hidden = true
                        enableChecks()
                    }
                    if (games.isPlayer1Committed == false && games.isPlayer2Committed == true &&
                        games.isPlayer1Revealed == false && games.isPlayer2Revealed == false ) {
                        document.getElementById('live_feed').innerHTML = "OPPONENT HAS SUBMITTED THEIR MOVE, WAITING ON YOU.."
                        document.getElementById('commit_button').hidden = false
                        document.getElementById('reveal_button').hidden = true
                        enableChecks()
                    }
                    if (games.isPlayer1Committed == true && games.isPlayer2Committed == false &&
                        games.isPlayer1Revealed == false && games.isPlayer2Revealed == false ) {
                        document.getElementById('live_feed').innerHTML = "YOU HAVE SUBMITTED YOUR MOVES, WAITING ON PLAYER 2.."
                        document.getElementById('commit_button').hidden = true
                        document.getElementById('reveal_button').hidden = true
                        disableChecks()
                    }
                    if (games.isPlayer1Committed == true && games.isPlayer2Committed == true &&
                        games.isPlayer1Revealed == false && games.isPlayer2Revealed == false ) {
                        document.getElementById('live_feed').innerHTML = "BOTH PLAYERS SUBMITTED, REVEAL YOUR MOVES NOW.."
                        document.getElementById('commit_button').hidden = true
                        document.getElementById('reveal_button').hidden = false
                        disableChecks()
                        
                    }
                    if (games.isPlayer1Committed == true && games.isPlayer2Committed == true &&
                        games.isPlayer1Revealed == false && games.isPlayer2Revealed == true ) {
                        document.getElementById('live_feed').innerHTML = "PLAYER 2 HAS REVEALED, REVEAL YOUR MOVES NOW TO END ROUND.."
                        document.getElementById('commit_button').hidden = true
                        document.getElementById('reveal_button').hidden = false
                        disableChecks()
                    }
                    if (games.isPlayer1Committed == true && games.isPlayer2Committed == true &&
                        games.isPlayer1Revealed == true && games.isPlayer2Revealed == false ) {
                        document.getElementById('live_feed').innerHTML = "YOU HAVE REVEALED YOUR MOVES, WAITING ON PLAYER 2 TO END ROUND.."
                        document.getElementById('commit_button').hidden = true
                        document.getElementById('reveal_button').hidden = true
                        disableChecks()
                    }
                    if (games.player2Hp == 0) {
                        document.getElementById('live_feed').innerHTML = "YOU HAVE WON! PLEASE PROCEED TO WITHDRAW WINNINGS."
                        document.getElementById('winner_div').hidden = false
                        document.getElementById('commit_button').hidden = true
                        document.getElementById('reveal_button').hidden = true
                        disableChecks()

                    }
                    if (games.player1Hp == 0) {
                        document.getElementById('live_feed').innerHTML = "YOU HAVE LOST. PLAYER 2 HAS WON."
                        document.getElementById('winner_div').hidden = false
                        // withdraw from game button?
                    }
                }
                if (games.player2.toUpperCase() == currentAccount.toUpperCase()) {
                    if (games.isPlayer1Committed == false && games.isPlayer2Committed == false &&
                        games.isPlayer1Revealed == false && games.isPlayer2Revealed == false ) {
                        document.getElementById('live_feed').innerHTML = "CHOOSE YOUR ATTACK AND DEFENDS.."
                        document.getElementById('commit_button').hidden = false
                        document.getElementById('reveal_button').hidden = true
                        enableChecks()
                    }
                    if (games.isPlayer1Committed == true && games.isPlayer2Committed == false &&
                        games.isPlayer1Revealed == false && games.isPlayer2Revealed == false ) {
                        document.getElementById('live_feed').innerHTML = "OPPONENT HAS SUBMITTED THEIR MOVE, WAITING ON YOU.."
                        document.getElementById('commit_button').hidden = false
                        document.getElementById('reveal_button').hidden = true
                        enableChecks()
                    }
                    if (games.isPlayer1Committed == false && games.isPlayer2Committed == true &&
                        games.isPlayer1Revealed == false && games.isPlayer2Revealed == false ) {
                        document.getElementById('live_feed').innerHTML = "YOU HAVE SUBMITTED YOUR MOVES, WAITING ON PLAYER 1.."
                        document.getElementById('commit_button').hidden = true
                        document.getElementById('reveal_button').hidden = true
                        disableChecks()
                    }
                    if (games.isPlayer1Committed == true && games.isPlayer2Committed == true &&
                        games.isPlayer1Revealed == false && games.isPlayer2Revealed == false ) {
                        document.getElementById('live_feed').innerHTML = "BOTH PLAYERS SUBMITTED, REVEAL YOUR MOVES NOW.."
                        document.getElementById('commit_button').hidden = true
                        document.getElementById('reveal_button').hidden = false
                    }
                    if (games.isPlayer1Committed == true && games.isPlayer2Committed == true &&
                        games.isPlayer1Revealed == true && games.isPlayer2Revealed == false ) {
                        document.getElementById('live_feed').innerHTML = "PLAYER 1 HAS REVEALED, REVEAL YOUR MOVES NOW TO END ROUND.."
                        document.getElementById('commit_button').hidden = true
                        document.getElementById('reveal_button').hidden = false
                        disableChecks()
                    }
                    if (games.isPlayer1Committed == true && games.isPlayer2Committed == true &&
                        games.isPlayer1Revealed == false && games.isPlayer2Revealed == true ) {
                        document.getElementById('live_feed').innerHTML = "YOU HAVE REVEALED YOUR MOVES, WAITING ON PLAYER 1 TO END ROUND.."
                        document.getElementById('commit_button').hidden = true
                        document.getElementById('reveal_button').hidden = true
                        disableChecks()
                    }
                    if (games.player1Hp == 0) {
                        document.getElementById('live_feed').innerHTML = "YOU HAVE WON! PLEASE PROCEED TO WITHDRAW WINNINGS."
                        document.getElementById('winner_div').hidden = false
                        document.getElementById('commit_button').hidden = true
                        document.getElementById('reveal_button').hidden = true
                    }
                    if (games.player2Hp == 0) {
                        document.getElementById('winner_div').hidden = false
                        document.getElementById('live_feed').innerHTML = "YOU HAVE LOST. PLAYER 1 HAS WON."
                    }
                }

                currentAttackAndDefends = gameMoves
                currentGameStats = games
                updateLiveGame(myGameNumber)

                // update these to compare the next contract call to for updates on page
                return;
            })
    }, 3000);
}

function revealAnswer() {
    let game_number = localStorage.getItem("myGameNumber");
    let random_number = localStorage.getItem("myRandomNumber");
    let attack_array = JSON.parse(localStorage.getItem("myAttackArray"));
    let defend_array = JSON.parse(localStorage.getItem("myDefendArray"));
    let block_number = JSON.parse(localStorage.getItem("block#forHash"));
    document.getElementById('reveal_button').disabled = true
    GAME_Contract.methods.revealVote(game_number, attack_array, defend_array, random_number, block_number).send({from: currentAccount}).on('transactionHash', tx => {

    }).then(receipt => {
        if (receipt.status == '0x1' || receipt.status == 1) {
            console.log('Transaction Successful')
            document.getElementById('reveal_button').hidden = false
            document.getElementById('reveal_button').disabled = false
            console.log(receipt)
        } else {
        
        }
    }).catch(err => {
        // console.log('Error', err)
        document.getElementById('reveal_button').disabled = false
    }). finally(() => {
        console.log('approve function finished, returning')
        return
    })
}

function endGameWinner() {
    GAME_Contract.methods.winnerWithdraw(myGameNumber).send({from: currentAccount}).on('transactionHash', tx => {

    }).then(receipt => {
        if (receipt.status == '0x1' || receipt.status == 1) {
            console.log('Transaction Successful')
            console.log(receipt)
            getAccount()
            document.getElementById('winner_div').hidden = true;
        } else {
        }
    }).catch(err => {

    }). finally(() => {
        return
    })
}

function endGameLoser() {
    GAME_Contract.methods.loserWithdraw(myGameNumber).send({from: currentAccount}).on('transactionHash', tx => {

        }).then(receipt => {
            if (receipt.status == '0x1' || receipt.status == 1) {
                console.log('Transaction Successful')
                console.log(receipt)
                getAccount()
                document.getElementById('winner_div').hidden = true;
            } else {
            
            }
        }).catch(err => {
        
        }). finally(() => {
        
            return
        })
}

function setNFT() {
    const nftcontract = document.getElementById('nft_gen').value
    const nftnumber = document.getElementById('nft_number_choice').value
    // console.log(typeof(parseFloat(nftnumber)))
    let _isOwner
    if (nftcontract.toUpperCase() == ECHPUNKS_NFT_address.toUpperCase()) {
        _isOwner = promisify(isOwner_ => ECHPUNKS_NFT_Contract.methods.ownerOf(nftnumber).call(isOwner_))
    }
    if (nftcontract.toUpperCase() == ECHPUNKS_NFT2_address.toUpperCase()) {
        _isOwner = promisify(isOwner_ => ECHPUNKS_NFT2_Contract.methods.ownerOf(nftnumber).call(isOwner_))
    }

    Promise.all([_isOwner])
    .then(function ([isOwner]) {
        console.log(isOwner.toUpperCase() == currentAccount.toUpperCase())
        if (isOwner.toUpperCase() == currentAccount.toUpperCase()) {
            document.getElementById('not_your_nft').innerHTML = ""
            GAME_Contract.methods.setPlayer(nftcontract, nftnumber).send({from: currentAccount}).on('transactionHash', tx => {

            }).then(receipt => {
                if (receipt.status == '0x1' || receipt.status == 1) {
                    console.log('Transaction Successful')
                    console.log(receipt)
                    getAccount()
                    // document.getElementById('winner_div').hidden = true;
                } else {
                
                }
            }).catch(err => {
            
            }). finally(() => {
                return
            })
        } else {
            document.getElementById('not_your_nft').innerHTML = "You do not own this NFT"
        }
    })
}