"use client";

import TokenBalanceCard from "@/components/TokenBalanceCard";
import { useEffect, useState } from "react";

export default function WalletPage({
  params,
}: {
  params: Promise<{ address: string }>;
}) {
  const [wallet, setWallet] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadWallet() {
      try {
        setLoading(true);

        const { address } = await params;
        const res = await fetch(`/api/wallet/${address}`);
        const data = await res.json();

        setWallet(data);
      } catch (error) {
        setWallet({ error: "Failed to load wallet data" });
      } finally {
        setLoading(false);
      }
    }

    loadWallet();
  }, [params]);

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-primary mb-6 text-center">
          💼 Wallet Information
        </h1>

        {loading && (
          <div className="p-4 rounded-xl bg-zinc-800 border border-zinc-700">
            <p className="text-zinc-300 text-center">Loading wallet...</p>
          </div>
        )}

        {!loading && wallet?.error && (
          <div className="p-4 rounded-xl bg-zinc-800 border border-red-700">
            <p className="text-red-400 text-center">{wallet.error}</p>
          </div>
        )}

        {!loading && wallet && !wallet.error && (
          <>
            <div className="p-4 rounded-xl bg-zinc-800 border border-zinc-700 mb-6 space-y-2">
              <p className="text-sm text-zinc-400">Address</p>
              <p className="text-sm break-all text-green-400 font-mono">
                {wallet.address}
              </p>

              <p className="text-sm text-zinc-400 mt-3">SOL Balance</p>
              <p className="text-lg font-semibold text-white">{wallet.solBalance}</p>
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-zinc-100">Tokens</h2>

            {wallet.tokens?.length > 0 ? (
              <div className="grid gap-4">
                {wallet.tokens.map((token: any) => (
                  <TokenBalanceCard key={token.mint} token={token} />
                ))}
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-zinc-800 border border-zinc-700">
                <p className="text-zinc-300 text-center">No tokens found</p>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}