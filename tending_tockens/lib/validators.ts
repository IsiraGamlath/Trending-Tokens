import { PublicKey } from "@solana/web3.js";

export function isValidWalletAddress(address: string) {
  try {
    new PublicKey(address);
    return true;
  } catch {
    return false;
  }
}