import { getTokenInfo } from "@/lib/solanaTracker";

export default async function TokenPage({
  params,
}: {
  params: Promise<{ mint: string }>;
}) {
  const { mint } = await params;

  try {
    const token = await getTokenInfo(mint);

    return (
      <main className="min-h-screen bg-zinc-950 text-white p-8 flex items-center justify-center">
        <div className="w-full max-w-3xl bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">
          <h1 className="text-3xl font-bold text-primary mb-6 text-center">
            {token?.token?.name || "Unknown Token"}
          </h1>

          {token?.token?.image && (
            <img
              src={token.token.image}
              width={80}
              height={80}
              alt={token.token.name}
              className="rounded-xl mb-6 mx-auto"
            />
          )}

          <div className="rounded-xl bg-zinc-800 border border-zinc-700 p-4 space-y-2 mb-6">
            <p className="text-zinc-300">
              <span className="text-zinc-400">Symbol:</span> {token?.token?.symbol || "N/A"}
            </p>
            <p className="text-zinc-300 break-all">
              <span className="text-zinc-400">Mint:</span> {token?.token?.mint || mint}
            </p>
            <p className="text-zinc-300">
              <span className="text-zinc-400">Decimals:</span> {token?.token?.decimals ?? "N/A"}
            </p>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Market Data</h2>

          <div className="grid gap-3">
            <div className="rounded-xl bg-zinc-800 border border-zinc-700 p-4">
              <p className="text-zinc-400 text-sm">Price</p>
              <p className="text-success font-semibold">
                ${token?.pools?.[0]?.price?.usd ?? "N/A"}
              </p>
            </div>

            <div className="rounded-xl bg-zinc-800 border border-zinc-700 p-4">
              <p className="text-zinc-400 text-sm">Liquidity</p>
              <p className="text-white font-semibold">
                ${token?.pools?.[0]?.liquidity?.usd ?? "N/A"}
              </p>
            </div>

            <div className="rounded-xl bg-zinc-800 border border-zinc-700 p-4">
              <p className="text-zinc-400 text-sm">Market Cap</p>
              <p className="text-white font-semibold">
                ${token?.pools?.[0]?.marketCap?.usd ?? "N/A"}
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  } catch {
    return (
      <main className="min-h-screen bg-zinc-950 text-white p-8 flex items-center justify-center">
        <div className="w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">
          <p className="text-red-400 text-center">
            Failed to load token information.
          </p>
        </div>
      </main>
    );
  }
}