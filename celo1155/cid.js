const ContractKit = require("@celo/contractkit");

async function cid(contractAddress, id) {
  const kit = ContractKit.newKit(this.network);

  const abi = [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "cid",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  const contract = new kit.web3.eth.Contract(abi, contractAddress);

  const cid = await contract.methods.cid(id).call()
  return cid;
}

module.exports = cid;
