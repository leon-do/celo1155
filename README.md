# CELO1155 - ERC1155 tokens on Celo

![](https://user-images.githubusercontent.com/19412160/110195687-03e5d280-7e0d-11eb-9ba4-1d4272599533.png)

### Setup

`npm install celo1155`

```javascript
const celo1155 = require("celo1155");

celo1155.network("https://alfajores-forno.celo-testnet.org");
celo1155.privateKey("your-private-key");
celo1155.abi(["your-1155-abi"] || null);
```

### Deploy 1155 Contract

```javascript
const bytecode = "60806040526..." || null;
celo1155.deploy(bytecode).then(console.log);
/*
{
    blockHash: '0x216cb2cb6e9155471b680ad32290e08fbd88d89e37570411fd93ad46278f4834',
    blockNumber: 3937550,
    contractAddress: '0x1A6b82e6d3EA82357B9167b0a47a8127ce736728',
    cumulativeGasUsed: 2444481,
    from: '0x4219f37376a1656303b985d78761c29eec72cada',
    gasUsed: 2444481,
    logs: [],
    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    status: true,
    to: null,
    transactionHash: '0x6495bf668299d13de7db05dcdf79db6f6f3eff6c3822e071af7c3ec18697bb73',
    transactionIndex: 0
}
*/
```

### Mint Tokens

```javascript
const contractAddress = "0x1A6b82e6d3EA82357B9167b0a47a8127ce736728";
const supply = 123;
const cid = "QmVuAMRv4tRsdgMzv5h4p8rbBdLt7FBdPgngpnM72qfd8v";
celo1155.mint(contractAddress, supply, cid).then(console.log);

/*
{
   "blockHash":"0xd08179b2018db0385c427d8121cc47330395d0c03b9f64c1d5429e22f5f20335",
   "blockNumber":3937606,
   "contractAddress":null,
   "cumulativeGasUsed":68640,
   "from":"0x4219f37376a1656303b985d78761c29eec72cada",
   "gasUsed":68640,
   "logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000002000000000000000000000000000000000000000000000000000010000000000000000000000020000000000000000000800000000000000000000000000004000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000008000080000000000020000000000000000000000000000000000000000000000000000000080000000000",
   "status":true,
   "to":"0x1a6b82e6d3ea82357b9167b0a47a8127ce736728",
   "transactionHash":"0x1e16772979a83489dc0b9ac1cd73163b5fd7e7cd311e5161d5108922b433e197",
   "transactionIndex":0,
   "events":{
      "0":{
         "address":"0x1A6b82e6d3EA82357B9167b0a47a8127ce736728",
         "blockNumber":3937606,
         "transactionHash":"0x1e16772979a83489dc0b9ac1cd73163b5fd7e7cd311e5161d5108922b433e197",
         "transactionIndex":0,
         "blockHash":"0xd08179b2018db0385c427d8121cc47330395d0c03b9f64c1d5429e22f5f20335",
         "logIndex":0,
         "removed":false,
         "id":"log_d563fde3",
         "returnValues":"Result"{
            
         },
         "event":"undefined",
         "signature":null,
         "raw":[
            "Object"
         ]
      }
   }
}
*/
```

### Get Balance of 1155

```javascript
const contractAddress = "0x1A6b82e6d3EA82357B9167b0a47a8127ce736728";
const account = "0x4219f37376a1656303b985d78761c29eec72cada";
const id = 1;
celo1155.balanceOf(contractAddress, account, id).then(console.log);
// 123
```

### Safe Transfer From

```javascript
const contractAddress = "0x1A6b82e6d3EA82357B9167b0a47a8127ce736728";
const to = "0x869e4b4556ce2454625436Ed12431e4E70942FA9";
const id = 1;
const amount = 2;
const data = "0x";
celo1155.safeTransferFrom(contractAddress, to, amount, id, data).then(console.log);

/*
{
   "blockHash":"0xeeaff2c9bf3c636b201421e9ac51b914e3d3deb0f55cf15a1c538d37f11bf6ea",
   "blockNumber":3937849,
   "contractAddress":null,
   "cumulativeGasUsed":54993,
   "from":"0x4219f37376a1656303b985d78761c29eec72cada",
   "gasUsed":54993,
   "logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000002000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000004000000000000000004000000000000010000000004000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000800000000000000000000000000000000000000000000000000000000008000080000000000000000000000000000000000000000000000000000000000000000000080000000000",
   "status":true,
   "to":"0x1a6b82e6d3ea82357b9167b0a47a8127ce736728",
   "transactionHash":"0x8d4a27b0a0b38b22dffce77c7c9e49245ae21824bf91954c6c483c213420a7cd",
   "transactionIndex":0,
   "events":{
      "0":{
         "address":"0x1A6b82e6d3EA82357B9167b0a47a8127ce736728",
         "blockNumber":3937849,
         "transactionHash":"0x8d4a27b0a0b38b22dffce77c7c9e49245ae21824bf91954c6c483c213420a7cd",
         "transactionIndex":0,
         "blockHash":"0xeeaff2c9bf3c636b201421e9ac51b914e3d3deb0f55cf15a1c538d37f11bf6ea",
         "logIndex":0,
         "removed":false,
         "id":"log_f06e723a",
         "returnValues":"Result"{
            
         },
         "event":"undefined",
         "signature":null,
         "raw":[
            "Object"
         ]
      }
   }
}
*/
```

### Creators

```javascript
const contractAddress = "0x1A6b82e6d3EA82357B9167b0a47a8127ce736728";
const id = 1;
celo1155.creators(contractAddress, id).then(console.log);
// 0x4219f37376A1656303b985D78761C29EEc72caDa
```

## Notes

### Solidity Contract

```solidity
// SPDX-Licence-Identifier: MIT

pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol";

contract Celo1155 is ERC1155 {

    mapping (uint256 => address) public creators;
    mapping (uint256 => string) public cid;
    uint256 public id = 1;

    constructor () public ERC1155("") {}

    function mint(uint256 _supply, string memory _cid) public {
        require(creators[id] == address(0x0), "Token is already minted");
        creators[id] = msg.sender;
        cid[id] = _cid;
        _mint(msg.sender, id, _supply, "");
        id++;
    }
}
```

### ABI

```json
[
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "values",
        "type": "uint256[]"
      }
    ],
    "name": "TransferBatch",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "TransferSingle",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "value",
        "type": "string"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "URI",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "accounts",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      }
    ],
    "name": "balanceOfBatch",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "cid",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "creators",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "id",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_supply",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_cid",
        "type": "string"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "safeBatchTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "uri",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
```
