const BASE_URL = process.env.SOLANA_TRACKER_BASE_URL;

// Fetch trending tokens from the Solana Tracker API
export async function getTrendingTokens() {

  const res = await fetch(
    `${process.env.SOLANA_TRACKER_BASE_URL}/tokens/trending`,
    {
      headers: {
        "x-api-key": process.env.SOLANA_TRACKER_API_KEY!,
      },
    }
  );


  if (!res.ok) {
    throw new Error("Failed to fetch trending tokens");
  }


  const data = await res.json();

  return data;
}

// Fetch token information by mint address
export async function getTokenInfo(
  mintAddress: string
) {

  const res = await fetch(
    `${BASE_URL}/tokens/${mintAddress}`,
    {
      headers: {
        "x-api-key": process.env.SOLANA_TRACKER_API_KEY!,
      },
    }
  );


  if (!res.ok) {
    throw new Error(
      "Failed to fetch token information"
    );
  }


  const data = await res.json();


  return data;

}