const ContractKit = require("@celo/contractkit");

async function creators(contractAddress, id) {
  const kit = ContractKit.newKit(this.network);

  // https://docs.celo.org/developer-guide/contractkit/usage#interacting-with-custom-contracts
  const abi = [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "creators",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  const contract = new kit.web3.eth.Contract(abi, contractAddress);

  const creator = await contract.methods.creators(id).call()
  return creator;
}

module.exports = creators;
