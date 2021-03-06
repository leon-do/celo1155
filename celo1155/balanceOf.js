const ContractKit = require("@celo/contractkit");

async function balanceOf(contractAddress, account, id) {
  const kit = ContractKit.newKit(this.network);
  const abi = this.abi || [
    {
      inputs: [
        { internalType: "address", name: "account", type: "address" },
        { internalType: "uint256", name: "id", type: "uint256" },
      ],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
  ];
  const contract = new kit.web3.eth.Contract(abi, contractAddress);

  const balance = await contract.methods.balanceOf(account, id).call();
  return balance;
}

module.exports = balanceOf;
