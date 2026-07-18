"use client";

import { useState } from "react";


export default function PhantomPage() {

  const [wallet, setWallet] = useState("");
  const [message, setMessage] = useState("");

  async function connectWallet() {

    const provider = (window as any).phantom?.solana;


    if (!provider) {

      setMessage(
        "Install Phantom Wallet extension on Google Chrome to use this feature"
      );

      return;
    }


    try {

      const response = await provider.connect();

      const address = response.publicKey.toString();

      setWallet(address);


      setMessage("Connected successfully");


    } catch (error) {
      console.log("Phantom connection error:", error);
      
      setMessage("Connection rejected");

    }

  }



  return (
  <main className="min-h-screen bg-zinc-950 text-white p-8 flex items-center justify-center">

    <div className="w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">

      <h1 className="text-3xl font-bold text-primary mb-6 text-center">
        🟣 Phantom Wallet
      </h1>


      <button
        onClick={connectWallet}
        className="w-full bg-primary hover:bg-primary-hover transition px-6 py-3 rounded-xl font-semibold"
      >
        Connect Phantom
      </button>


      {message && (
        <div className="mt-6 p-4 rounded-xl bg-zinc-800 border border-zinc-700">
          <p className="text-zinc-300 text-center">
            {message}
          </p>
        </div>
      )}


      {wallet && (
        <div className="mt-6 p-4 rounded-xl bg-zinc-800 border border-zinc-700">

          <p className="text-sm text-zinc-400 mb-2">
            Public Key
          </p>

          <p className="text-sm break-all text-red-400 font-mono">
            {wallet}
          </p>

        </div>
      )}

    </div>

  </main>
);

}