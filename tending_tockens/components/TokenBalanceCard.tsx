import Link from "next/link";

type TokenBalanceCardProps = {
  token: {
    name: string;
    symbol: string;
    mint: string;
    amount: number;
    image?: string;
  };
};

export default function TokenBalanceCard({ token }: TokenBalanceCardProps) {
  return (
    <div className="rounded-xl bg-zinc-800 border border-zinc-700 p-4">
      {token.image && (
        <img
          src={token.image}
          width={50}
          height={50}
          alt={token.name}
          className="rounded-md mb-3"
        />
      )}

      <Link href={`/token/${token.mint}`}>
        <h3 className="text-lg font-semibold text-primary hover:text-primary transition">
          {token.name}
        </h3>
      </Link>

      <p className="text-zinc-300 mt-1">Symbol: {token.symbol}</p>

      <p className="text-zinc-400 text-sm break-all mt-1">
        Mint: {token.mint}
      </p>

      <p className="text-green-400 font-semibold mt-2">
        Amount: {token.amount}
      </p>
    </div>
  );
}