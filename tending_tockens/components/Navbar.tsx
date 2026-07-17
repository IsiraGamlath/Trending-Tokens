import Link from "next/link";


export default function Navbar() {

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black text-white">

      <Link href="/">
        <h2 className="text-xl font-bold">
          Solana Dashboard
        </h2>
      </Link>


      <div className="flex gap-6">

        <Link 
          href="/"
          className="hover:text-purple-400"
        >
          Home
        </Link>


        <Link
          href="/phantom"
          className="hover:text-purple-400"
        >
          Phantom
        </Link>

        <Link
          href="/wallet"
          className="hover:text-purple-400"
        >
          Wallet
        </Link>

      </div>

    </nav>
  );
}