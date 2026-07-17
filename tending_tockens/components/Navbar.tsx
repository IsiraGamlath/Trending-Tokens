import Link from "next/dist/client/link";

export default function Navbar() {
    return (
        <nav>
            <h2> Solana Dashboard </h2>

            <div>
                <Link href="/">Home</Link>
        <Link href="/phantom">Phantom</Link>
            </div>
        </nav>
    );
}