const {Blockchain, Transaction} = require("./blockchain.js")
const EC = require('elliptic').ec
const ec = new EC('secp256k1')

const myKey = ec.keyFromPrivate('b0d7ced9a9e2cc117c3bfabf574b94a5557805ac44078af401507e87668ecc')
const myWalletAddress = myKey.getPublic('hex')

const coin = new Blockchain()

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10)
tx1.signTransaction(myKey)
coin.addTransaction(tx1)

console.log('\n starting the miner...')
coin.minePendingTransactions(myWalletAddress)


console.log('\n Balance of Alibek is ', coin.getBalanceOfAddress(myWalletAddress))

console.log('is chain valid', coin.isChainValid())
