const NETWORK_ID = 137
var PriceMatic = null
var spend
var PRESALE_PRICE = null
var MAX_SUPPLY = null
var MAX_PRESALE_SUPPLY = null
var contract
var contract2
var accounts
var misNftsID2 = [];
var web3
var spend;
var balance
var tokenbalance
var available
var mynft;
var balance2 ;
var currentAddr = null;
var balanceNFT
var IsAproba;
var stake;
var TokenUser = 0;
var misNftsID = [];
var iddeltango;
var balanceStake;
var TotalMinado;
var tokenContract;
let priceMATIC;
let priceMATICUWU;
let priceUWU;
const NftsAddress = '0xCB0eF7795AEd9bB706801310F329cd066875Ae0B'

const tokenAddress = '0x410ce9E4B6B15Ec2d86443461ad372B4A381bA09' // mainnet busd



const NftsABI = [{"inputs":[{"internalType":"string","name":"baseURIVal_","type":"string"},{"internalType":"contract IERC20","name":"_TokenUWU","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"MAX_MINTABLE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TokenUWU","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"min","type":"uint256"},{"internalType":"uint256","name":"max","type":"uint256"},{"internalType":"string","name":"prefix","type":"string"}],"name":"addBucket","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPurchaseCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintPriceMATICUWU","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintPriceUWU","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfTokens","type":"uint256"}],"name":"mintTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfTokens","type":"uint256"}],"name":"mintTokensUWU","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintingComplete","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"recycle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"recycleCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"recycleSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"recyclingActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"recyclingOff","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"recyclingOn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newBase","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newContractURI","type":"string"}],"name":"setContractURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setMintPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setMintPriceUWU","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setMintPriceUWUMATIC","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newCost","type":"uint256"}],"name":"setRecycleCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newSupply","type":"uint256"}],"name":"setRecycleSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWeirdo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawMatic","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const tokenAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]

const contract2Abi = [{"inputs":[{"internalType":"contract IERC721","name":"_nftToken","type":"address"},{"internalType":"contract IERC20","name":"_erc20Token","type":"address"},{"internalType":"address","name":"_daoAdmin","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"NftStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"NftUnStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stakeAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fromBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toBlock","type":"uint256"}],"name":"StakePayout","type":"event"},{"inputs":[{"internalType":"uint256[]","name":"tokenId","type":"uint256[]"}],"name":"AdmidstakeNFT","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"Nft1","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"stakedFromBlock","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"buyNfts","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"daoAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"erc20Token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStakeContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStakeNftBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"myNfts1","outputs":[{"internalType":"uint256","name":"_tokensId","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftToken","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"playerNfts1","outputs":[{"internalType":"uint256","name":"mount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reclaimTokensUWU","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawnft","outputs":[],"stateMutability":"nonpayable","type":"function"}]
window.addEventListener('load', connectWallet)

function metamaskReloadCallback() {
  window.ethereum.on('accountsChanged', (accounts) => {
    document.getElementById("web3_message").textContent = "Accounts changed, realoading...";
    window.location.reload()
  })
  window.ethereum.on('networkChanged', (accounts) => {
    document.getElementById("web3_message").textContent = "Network changed, realoading...";
    window.location.reload()
  })
}

const getAccounts = async () => {
  metamaskReloadCallback()
  try {
    await window.ethereum.request({ method: "eth_requestAccounts" })
    resolve(web3)
  } catch (error) {
    console.log(error)
  }
}

const getWeb3 = async () => {
  return new Promise((resolve, reject) => {
    if (document.readyState == "complete") {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum)
        resolve(web3)
      } else {
        reject("must install MetaMask")
        document.getElementById("web3_message").textContent = "Error: Please install Metamask";
      }
    } else {
      window.addEventListener("load", async () => {
        if (window.ethereum) {
          const web3 = new Web3(window.ethereum)
          resolve(web3)
        } else {
          reject("must install MetaMask")
          document.getElementById("web3_message").textContent = "Error: Please install Metamask";
        }
      });
    }
  });
};

function handleRevertError(message) {
  alert(message)
}

async function getRevertReason(txHash) {
  const tx = await web3.eth.getTransaction(txHash)
  await web3.eth
    .call(tx, tx.blockNumber)
    .then((result) => {
      throw Error("unlikely to happen")
    })
    .catch((revertReason) => {
      var str = "" + revertReason
      json_reason = JSON.parse(str.substring(str.indexOf("{")))
      handleRevertError(json_reason.message)
    });
}

const getContract = async (web3) => {
  // const response = await fetch("./contracts/MinerGlobal.json");
  //const data = await response.json();

  const netId = await web3.eth.net.getId();
  //const deployedNetwork = data.networks[netId];
  tokenContract = new web3.eth.Contract(tokenAbi, tokenAddress);
  contract = new web3.eth.Contract(NftsABI, NftsAddress);


  return contract
}

async function connectWallet() {
  getAccounts()
}

async function loadAccount() {

  accounts = await web3.eth.getAccounts()
  balance = await contract.methods.balanceOf(accounts[0]).call()
   
  

  
  tokenContract.methods.balanceOf(accounts[0]).call().then(userBalance => {
    let amt = web3.utils.fromWei(userBalance);

  }).catch((err) => {
    console.log(err)
  });







 

}


async function loadDapp() {

  var awaitWeb3 = async function () {
    web3 = await getWeb3()
    web3.eth.net.getId((err, netId) => {
      if (netId == NETWORK_ID) {


        var awaitContract = async function () {
          contract = await getContract(web3);

          
          MAX_SUPPLY = await contract.methods.MAX_MINTABLE().call()
          total_mint = await contract.methods.totalSupply().call()
          PriceMatic = await contract.methods.mintPrice().call() 
          priceMATICUWU = await contract.methods.mintPriceMATICUWU().call() 
          priceUWU = await contract.methods.mintPriceUWU().call() 
          

          var cantotal = parseFloat(total_mint) - parseFloat(balance2);
          console.log(cantotal)
         // document.getElementById("total_mint").textContent = `${parseFloat(total_mint) - parseFloat(balance2)} / ${MAX_SUPPLY}`  
          
          //document.getElementById("priceMATIC").textContent = `${web3.utils.fromWei(PriceMatic)} MATIC`  
    






          web3.eth.getAccounts(function (err, accounts) {
            if (err != null)
              console.error("An error occurred: " + err);
            else if (accounts.length == 0)
              console.log("User is not logged in to MetaMask");
            else {
              loadAccount()
            }
          });
        };
        awaitContract();
      } else {
        //document.getElementById("web3_message").textContent = "Please connect to Binance smart chain";
      }
    });
  };
  awaitWeb3();
}

loadDapp()





function approveMint2() {
  var box2 = document.getElementById('val2').value

  var p = (parseFloat((web3.utils.fromWei(priceUWU) * 0.1) / 100) * parseFloat(box2))
  var pbox2 = (parseFloat(web3.utils.fromWei(priceUWU)) ) * parseFloat(box2);

 
  console.log(pbox2)
  approveBox2(pbox2);
}

function approveBox2(_amount) {
  let amt;
  if (_amount != 0) {
    amt = _amount;
    //alert(amt)
  }
  else {
    amt = 0
  }

  let _spend = web3.utils.toWei(amt.toString())
  tokenContract.methods.approve(NftsAddress, _spend).send({ from: accounts[0] }).then(result => {
    $("#mintBox2").show();
    $("#approve2").hide();

  }).catch((err) => {
    console.log(err)
  });
}




const mint1 = async () => {



    var mount = document.getElementById('val1').value

    const result = await contract.methods.mintTokens(mount)
      .send({ from: accounts[0],  gas: 0, value:  mount * PriceMatic })
      loadDapp()
   
      .catch((revertReason) => {
        getRevertReason(revertReason.receipt.transactionHash);
      });
}


const mint2 = async () => {

  var mount = document.getElementById('val2').value

  const result = await contract.methods.mintTokensUWU(mount)
    .send({ from: accounts[0],  gas: 0, value:  mount * PriceMatic })
    loadDapp()
 
    .catch((revertReason) => {
      getRevertReason(revertReason.receipt.transactionHash);
    });

}




var init2 = 0; //se inicializa una variable en 0

function aum2() { // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar

  var cantidad = document.getElementById('val2').value = ++init2; //se obtiene el valor del input, y se incrementa en 1 el valor que tenga.
  var p = (parseFloat((web3.utils.fromWei(priceMATICUWU) * 0.1) / 100) * parseFloat(cantidad))
  var pbox1 = (parseFloat(web3.utils.fromWei(priceMATICUWU)) + p) * parseFloat(cantidad);

  var p2 = (parseFloat((web3.utils.fromWei(priceUWU) * 0.1) / 100) * parseFloat(cantidad))
  var pbox12= (parseFloat(web3.utils.fromWei(priceUWU)) + p) * parseFloat(cantidad);



  document.getElementById("priceUWUMATIC").textContent = pbox1.toFixed(4) + " $MATIC"
  document.getElementById("priceUWU").textContent = pbox12.toFixed(4) + " $UWU"


}

function dis2() { // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir
  var cantidad = document.getElementById('val2').value
  if (cantidad == 0) {
    document.getElementById('val2').value = '00'
  } else {
    var cantidad = document.getElementById('val2').value = --init2; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.

  
  }
}


var init1 = 0; 

function aum1() {

  var cantidad = document.getElementById('val1').value = ++init1; 
  var p = (parseFloat((web3.utils.fromWei(PriceMatic) * 0.1) / 100) * parseFloat(cantidad))
  var pbox1 = (parseFloat(web3.utils.fromWei(PriceMatic)) + p) * parseFloat(cantidad);
  document.getElementById("priceMATIC").textContent = pbox1.toFixed(4) + " $MATIC"


}

function dis1() { 
  var cantidad = document.getElementById('val1').value
  if (cantidad == 0) {
    document.getElementById('val1').value = '00'

  } else {
    var cantidad = document.getElementById('val1').value = --init1; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
    var p = (parseFloat((web3.utils.fromWei(PriceMatic) * 0.1) / 100) * parseFloat(cantidad))
    var pbox1 = (parseFloat(web3.utils.fromWei(PriceMatic)) + p) * parseFloat(cantidad);
    document.getElementById("priceMATIC").textContent = pbox1.toFixed(4) + " $MATIC"
  }
}



