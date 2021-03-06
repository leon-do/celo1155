const ContractKit = require('@celo/contractkit')

async function mint(id, supply, uri) {
  const kit = ContractKit.newKit(process.env.CELO_NETWORK);
  kit.connection.addAccount(process.env.CELO_PRIVATE_KEY);

  // https://docs.celo.org/developer-guide/contractkit/usage#interacting-with-custom-contracts
  const abi = [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "supply",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "uri",
          type: "bytes",
        },
      ],
      name: "mint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
  const contract = new kit.web3.eth.Contract(abi, process.env.CELO_CONTRACT);

  const from = (await kit.web3.eth.getAccounts())[0];
  const data = uri || "0x0000000000000000000000000000000000000000000000000000000000000000";

  const tx = await contract.methods.mint(id, supply, data).send({ from });
  return tx;
}

module.exports = mint;
