import dotenv from "dotenv";
dotenv.config();
import { newKit } from "@celo/contractkit";

start();
async function start() {
  const kit = newKit(process.env.CELO_NETWORK);
  const abi = [
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
  const contract = new kit.web3.eth.Contract(abi, process.env.CELO_CONTRACT);

  const account = "0x4219f37376A1656303b985D78761C29EEc72caDa";
  const id = 1;

  const balance = await contract.methods.balanceOf(account, id).call();
  console.log(balance);
}
