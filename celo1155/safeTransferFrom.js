const ContractKit = require('@celo/contractkit')

async function safeTransferFrom(to, amount, id, data) {
  const kit = ContractKit.newKit(process.env.CELO_NETWORK);
  kit.connection.addAccount(process.env.CELO_PRIVATE_KEY);

  const abi = [
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
  const contract = new kit.web3.eth.Contract(abi, process.env.CELO_CONTRACT);

  const from = (await kit.web3.eth.getAccounts())[0];
  const datas = data || "0x0";

  const tx = await contract.methods.safeTransferFrom(from, to, amount, id, datas).send({ from });
  console.log(tx);
}

module.exports = safeTransferFrom;
