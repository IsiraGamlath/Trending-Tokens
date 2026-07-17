"use client";

import { useEffect, useState } from "react";
import TokenCard from "@/components/TokenCard";
import { Token } from "@/types/token";

export default function Home() {
  const [tokens, setTokens] = useState<Token[]>([]);

  useEffect(() => {
    async function fetchTokens() {
      const res = await fetch("/api/trending");
      const data = await res.json();

      console.log(data);
      setTokens(data);
    }

    fetchTokens();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-purple-500 mb-8">
        Trending Tokens
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tokens.map((token, index) => (
          <TokenCard
            key={`${token.token?.symbol}-${index}`}
            name={token.token.name}
            symbol={token.token.symbol}
            price={token.pools[0]?.price?.usd ?? 0}
            change24h={token.priceChange24h ?? 0}
          />
        ))}
      </div>
    </main>
  );
}