import { MarketItem } from "./marketItem";

export type WalletType = Record<string, number>;

export type WalletItemType = MarketItem & { amount: number, totalPrice: number };