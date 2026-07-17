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
        <div>
            <h2> {name} </h2>

            <p> 
               Symbol: {symbol} 
            </p>

            <p>
                Price: ${price}
            </p>
            
            <p>
                24h Change: {change24h ?? "N/A"}%
            </p>
            
        </div>
    );
}