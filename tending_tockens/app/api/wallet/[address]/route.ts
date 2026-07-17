import { Connection, PublicKey } from "@solana/web3.js";
import { isValidWalletAddress } from "@/lib/validators";
import { getTokenInfo } from "@/lib/solanaTracker";

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
    const tokenList = await Promise.all(

  tokens.value.map(async (item) => {

    const mint =
      item.account.data.parsed.info.mint;


    const amount =
      item.account.data.parsed.info.tokenAmount.uiAmount;


    try {

      const info = await getTokenInfo(mint);


      return {
        mint,
        amount,
        name: info.token?.name ?? "Unknown",
        symbol: info.token?.symbol ?? "Unknown",
        image: info.token?.image ?? ""
      };


    } catch {

      return {
        mint,
        amount,
        name: "Unknown",
        symbol: "Unknown",
        image: ""
      };

    }

  })

);
  return Response.json({
    address,
    solBalance,
    tokens: tokenList
  });

}