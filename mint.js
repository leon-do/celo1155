import dotenv from "dotenv";
dotenv.config();
import { newKit } from "@celo/contractkit";

start();
async function start() {
  const kit = newKit(process.env.CELO_NETWORK);

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
  const id = 1;
  const supply = 11;
  const uri = "0x0000000000000000000000000000000000000000000000000000000000000000";

  const tx = await contract.methods.mint(id, supply, uri).send({ from });
  console.log(tx);
}
