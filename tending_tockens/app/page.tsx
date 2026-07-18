"use client";

import { useEffect, useState } from "react";
import TokenCard from "@/components/TokenCard";
import { Token } from "@/types/token";

export default function Home() {

  const [loading, setLoading] = useState(true);

  const [tokens, setTokens] = useState<Token[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const tokensPerPage = 9;

  const indexOfLastToken = currentPage * tokensPerPage;
  const indexOfFirstToken = indexOfLastToken - tokensPerPage;

  const currentTokens = tokens.slice(
    indexOfFirstToken,
    indexOfLastToken
  );

  const totalPages = Math.ceil(tokens.length / tokensPerPage);

  useEffect(() => {
    async function fetchTokens() {
      try {
        const res = await fetch("/api/trending");
        const data = await res.json();

        setTokens(data);

      } catch (error) {
        console.error("Error fetching trending tokens:", error);
      
      } finally {
        setLoading(false);
      }
    }
    fetchTokens();
  }, []);

  if (loading) {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8 flex items-center justify-center">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl text-center">

        <div className="w-10 h-10 border-4 border-zinc-700 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>

        <p className="text-zinc-300 text-lg">
          Loading Trending Tokens...
        </p>

      </div>
    </main>
  );
}

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-primary mb-8">
        Trending Tokens
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentTokens.map((token, index) => (
          <TokenCard
            key={`${token.token?.symbol}-${index}`}
            name={token.token.name}
            symbol={token.token.symbol}
            price={token.pools[0]?.price?.usd ?? 0}
            change24h={token.priceChange24h ?? 0}
          />
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-10">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-4 py-2 bg-zinc-800 rounded disabled:opacity-40"
        >
          Previous
        </button>

         {Array.from({ length: totalPages }, (_, i) => (

        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`px-4 py-2 rounded ${
            currentPage === i + 1
              ? "bg-primary"
              : "bg-zinc-800 hover:bg-zinc-700"
          }`}
        >
          {i + 1}
        </button>
  ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-4 py-2 bg-zinc-800 rounded disabled:opacity-40"
        >
          Next
        </button>

    </div>
    </main>
  );
}