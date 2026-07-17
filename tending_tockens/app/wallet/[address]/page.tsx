"use client";

import { useEffect, useState } from "react";

export default function WalletPage({
  params,
}: {
  params: Promise<{ address: string }>;
}) {

  const [wallet, setWallet] = useState<any>(null);


  useEffect(() => {

    async function loadWallet() {

      const { address } = await params;


      const res = await fetch(
        `/api/wallet/${address}`
      );


      const data = await res.json();


      setWallet(data);

    }


    loadWallet();

  }, [params]);



  if (!wallet) {
    return <p>Loading wallet...</p>;
  }


  if (wallet.error) {
    return <p>{wallet.error}</p>;
  }


  return (
    <main>

      <h1>Wallet Information</h1>


      <p>
        Address: {wallet.address}
      </p>


      <p>
        SOL Balance: {wallet.solBalance}
      </p>


      <h2>Tokens</h2>


      {wallet.tokens.map(
        (token: any, index: number) => (
          <div key={index}>

            <p>
              Mint: {token.mint}
            </p>

            <p>
              Amount: {token.amount}
            </p>

          </div>
        )
      )}

    </main>
  );
}