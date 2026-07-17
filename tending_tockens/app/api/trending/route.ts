import { getTrendingTokens } from "@/lib/solanaTracker";

export async function GET() {
  try {
    const data = await getTrendingTokens();

    return Response.json(data);

  } catch (error) {
    return Response.json(
      { error: "Failed to fetch tokens" },
      { status: 500 }
    );
  }
}