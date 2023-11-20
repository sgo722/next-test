import client from "@/services/client";

export async function getWallets() {
  const response = await client.get<WalletResponse>("wallets");
  if (response.status === 200) {
    return response.data;
  }
  throw new Error("Failed to get wallets");
}

export interface WalletResponse {
  username: string;
  bidCurrentQuantity: number;
  askCurrentQuantity: number;
  bidAvgCostPrice: number;
  askAvgCostPrice: number;
  bidLiquidationPrice: number;
  askLiquidationPrice: number;
  bidStartBalance: number;
  askStartBalance: number;
  bidBalance: number;
  askBalance: number;
  bidMarginBalance: number;
  askMarginBalance: number;
  bidLeverage: number;
  bidEarningRate: number;
  askEarningRate: number;
  askLeverage: number;
  bidAvailableBalance: number;
  askAvailableBalance: number;
}
