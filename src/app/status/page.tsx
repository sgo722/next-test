"use client";

import TradeSummaryTable from "@/components/table/TradeSummaryTable";
import { useQuery } from "@tanstack/react-query";
import { getTrades, TradeSummaries } from "@/services/trades/get";
import { getOrders, Order } from "@/services/orders/get";
import OrderTable from "@/components/table/OrderTable";

export default function StatusPage() {
  const { data: tradeSummary, isLoading } = useQuery<
    TradeSummaries,
    Error,
    TradeSummaries
  >({
    queryKey: ["trades"],
    queryFn: () => getTrades(),
    refetchInterval: 1000 * 60,
    initialData: {
      bidSummaries: [],
      askSummaries: [],
    },
  });

  const { data: orders } = useQuery<Order[], Error, Order[]>({
    queryKey: ["orders"],
    queryFn: () => getOrders(),
    refetchInterval: 1000 * 60,
    initialData: [],
  });

  if (!tradeSummary || !orders) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="px-4 py-2 flex flex-col">
        <h2 className="text-lg mb-4">공매수 거래 현황</h2>
        <TradeSummaryTable bodies={tradeSummary.bidSummaries} />
      </div>
      <div className="px-4 py-2 flex flex-col">
        <h2 className="text-lg mb-4">공매도 거래 현황</h2>
        <TradeSummaryTable bodies={tradeSummary.askSummaries} />
      </div>
      <div className="px-4 py-2 flex flex-col">
        <h2 className="text-lg mb-4">주문 내역</h2>
        <OrderTable bodies={orders} />
      </div>
    </div>
  );
}
