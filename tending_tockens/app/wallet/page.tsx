"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WalletSearchPage() {

  const [address, setAddress] = useState("");
  const router = useRouter();


  function searchWallet() {

    if (!address.trim()) return;

    router.push(`/wallet/${address}`);

  }


  return (
    <main className="min-h-screen bg-black text-white p-8">

      <h1 className="text-4xl font-bold text-primary mb-8">
        Wallet Lookup
      </h1>
   
      <div className="max-w-xl">

        <input
          type="text"
          placeholder="Enter Solana wallet address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="
            w-full
            p-3
            rounded-lg
            bg-gray-900
            border
            border-gray-700
            text-white
          "
        />


        <button
          onClick={searchWallet}
          className="
            mt-4
            px-6
            py-3
            rounded-lg
            bg-primary
            hover:bg-primary-hover
          "
        >
          Search Wallet
        </button>

      </div>

    </main>
  );
}