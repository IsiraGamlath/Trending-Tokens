export type WalletInfo = {
  address: string;
  solBalance: number;
  tokens: {
    mint: string;
    amount: number;
    symbol?: string;
    name?: string;
  }[];
};