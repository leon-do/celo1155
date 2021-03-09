const ContractKit = require("@celo/contractkit");

async function safeTransferFrom(contractAddress, to, id, amount, data) {
  const kit = ContractKit.newKit(this.network);
  kit.connection.addAccount(this.privateKey);

  const abi = this.abi || [
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
  const contract = new kit.web3.eth.Contract(abi, contractAddress);

  const from = (await kit.web3.eth.getAccounts())[0];
  const datas = data || "0x0000000000000000000000000000000000000000000000000000000000000000";

  const tx = await contract.methods.safeTransferFrom(from, to, id, amount, datas).send({ from });
  return tx;
}

module.exports = safeTransferFrom;
