export type Token = {
  priceChange24h: number;
  token: {
    address:  | null | undefined;
    name: string;
    symbol: string;
  };

  pools: {
    price?: {
      usd?: number;
    };
  }[];
};