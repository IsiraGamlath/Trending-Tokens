type TockenCardProps = {
    name: string;
    symbol: string;
    price: number;
    change24h?: number;
};

export default function TockenCard({ 
    name,
    symbol,
    price,
    change24h
}: TockenCardProps) {

    return (
        <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 shadow-lg hover:scale-105 transition">
            <h2 className="text-xl font-bold"> {name} </h2>

            <p className="text-zinc-400"> 
               Symbol: {symbol} 
            </p>

            <p className="text-2xl font-semibold mt-4 break-all">
            ${price < 1 ? price.toPrecision(4) : price.toFixed(2)}
            </p>
            
            <p className={`mt-3 font-semibold ${
                (change24h ?? 0) >= 0 ? "text-success" : "text-success"}`}>
                24h Change: {change24h ?? "N/A"}%
            </p>
            
        </div>
    );
}