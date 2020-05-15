var contractABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "hello",
    "outputs": [
      {
       "internalType": "string",
       "name": "",
       "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }
];
var contractAddress = '0x0D3Cb09Ab3D5C3e31dB1D675d71E5C297b0a09c1';
var web3 = new Web3('http://localhost:9545');
var helloWorld = new web3.eth.Contract(contractABI, contractAddress);

document.addEventListener('DOMContentLoaded', () => {
    helloWorld.methods.hello().call()
        .then(result => {
          document.getElementById('hello').innerHTML = result
});
});