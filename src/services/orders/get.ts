import client from "@/services/client";

export async function getOrders() {
  const response = await client.get<Order[]>("orders");
  if (response.status === 200) {
    return response.data;
  }
  throw new Error("Failed to get orders");
}

export interface Order {
  orderID: string;
  ordType: string;
  quantity: number;
  price: number;
  orderTime: string;
  position: boolean;
  isCancelled: boolean;
  side: string;
}
