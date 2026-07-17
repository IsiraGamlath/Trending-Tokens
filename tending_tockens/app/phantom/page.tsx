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

    <main>

      <h1>
        Phantom Wallet
      </h1>


      <button onClick={connectWallet}>
        Connect Phantom
      </button>


      {message && (
        <p>
          {message}
        </p>
      )}


      {wallet && (
        <p>
          Public Key: {wallet}
        </p>
      )}

    </main>

  );

}