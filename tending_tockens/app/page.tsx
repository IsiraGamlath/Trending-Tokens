"use client";

import { useEffect, useState } from "react";
import TockenCard from "@/components/TokenCard";
import { getTrendingTokens } from "@/lib/solanaTracker";
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
    <main>
      <h1>Trending Tokens</h1>

      <div>
        {tokens.map((token, index) => (
          <TockenCard
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