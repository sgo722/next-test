import client from "@/services/client";

export async function getTrades() {
  const response = await client.get<TradeSummaries>("trades");
  if (response.status === 200) {
    return response.data;
  }
  throw new Error("Failed to get trades");
}

export interface TradeSummaries {
  bidSummaries: TradeSummary[];
  askSummaries: TradeSummary[];
}

export interface TradeSummary {
  buyOrderID: string;
  buyOrderTime: string;
  orderQty: number;
  buyPrice: number;
  buyTime?: string;
  sellOrderID: string;
  sellOrderTime?: string;
  sellPrice: number;
  sellTime?: string;
}
