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