import { Connection, PublicKey } from "@solana/web3.js";
import { isValidWalletAddress } from "@/lib/validators";


export async function GET(
  request: Request,
  { params }: { params: Promise<{ address: string }> }
) {

  const { address } = await params;

  console.log("ADDRESS:", address);


  if (!isValidWalletAddress(address)) {

    return Response.json(
      {
        error: "Invalid wallet address"
      },
      {
        status: 400
      }
    );

  }


  const connection = new Connection(
    "https://api.mainnet-beta.solana.com"
  );


  const publicKey = new PublicKey(address);


  const balance = await connection.getBalance(publicKey);


  const solBalance = balance / 1000000000;


  const tokens =
    await connection.getParsedTokenAccountsByOwner(
      publicKey,
      {
        programId: new PublicKey(
          "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        )
      }
    );


  const tokenList = tokens.value.map((item) => ({
    mint: item.account.data.parsed.info.mint,
    amount: item.account.data.parsed.info.tokenAmount.uiAmount
  }));


  return Response.json({
    address,
    solBalance,
    tokens: tokenList
  });

}