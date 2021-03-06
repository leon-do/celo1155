import dotenv from "dotenv";
dotenv.config();
import { newKit } from "@celo/contractkit";

start();
async function start() {
  const kit = newKit(process.env.CELO_NETWORK);
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
  const to = "0x869e4b4556ce2454625436Ed12431e4E70942FA9";
  const amount = 1;
  const id = 1;
  const data = "0x0";

  const tx = await contract.methods.safeTransferFrom(from, to, amount, id, data).send({ from });
  console.log(tx);
}
