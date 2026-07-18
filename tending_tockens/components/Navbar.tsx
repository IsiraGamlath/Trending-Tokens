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
          className="hover:text-primary"
        >
          Home
        </Link>


        <Link
          href="/phantom"
          className="hover:text-primary"
        >
          Phantom
        </Link>

        <Link
          href="/wallet"
          className="hover:text-primary"
        >
          Wallet
        </Link>

      </div>

    </nav>
  );
}