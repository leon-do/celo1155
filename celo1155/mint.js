const ContractKit = require("@celo/contractkit");

async function mint(contractAddress, supply, cid) {
  const kit = ContractKit.newKit(this.network);
  kit.connection.addAccount(this.privateKey);

  // https://docs.celo.org/developer-guide/contractkit/usage#interacting-with-custom-contracts
  const abi = this.abi || [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_supply",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_cid",
          type: "string",
        },
      ],
      name: "mint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
  const contract = new kit.web3.eth.Contract(abi, contractAddress);

  const from = (await kit.web3.eth.getAccounts())[0];

  const tx = await contract.methods.mint(supply, cid).send({ from });
  return tx;
}

module.exports = mint;
