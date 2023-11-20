"use client";

import { useQuery } from "@tanstack/react-query";
import { getWallets, WalletResponse } from "@/services/wallets/get";

const walletData: WalletResponse = {
  username: "",
  bidCurrentQuantity: 0,
  askCurrentQuantity: 0,
  bidAvgCostPrice: 0,
  askAvgCostPrice: 0,
  bidLiquidationPrice: 0,
  askLiquidationPrice: 0,
  bidBalance: 0,
  askBalance: 0,
  bidStartBalance: 0,
  askStartBalance: 0,
  bidMarginBalance: 0,
  askMarginBalance: 0,
  bidLeverage: 0,
  bidEarningRate: 0,
  askEarningRate: 0,
  askLeverage: 0,
  bidAvailableBalance: 0,
  askAvailableBalance: 0,
};

const BTC_USD = 100000000;

const UserSummaryBox = () => {
  const { data, isLoading } = useQuery<WalletResponse, Error, WalletResponse>({
    queryFn: () => getWallets(),
    queryKey: ["wallets"],
    initialData: walletData,
    refetchInterval: 5000,
  });

  if (isLoading || !data) return <div>loading...</div>;

  return (
    <div className="block w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-sm">
      {/* 공매수/공매도 전체 자산 뷰 */}
      <div className="flex flex-row justify-between px-2">
        <span>전체 자산</span>
        <span>
          {((data.bidBalance + data.askBalance) / BTC_USD).toFixed(5)} BTC
        </span>
      </div>
      <div className="flex flex-row justify-between px-2">
        <span>시작 자산</span>
        <span>
          {(data.bidStartBalance + data.askStartBalance).toFixed(5)} BTC
        </span>
      </div>
      <div className="flex flex-row justify-between px-2">
        <span>수익(률)</span>
        <span>
          {(
            (data.bidBalance + data.askBalance) / BTC_USD -
            (data.bidStartBalance + data.askStartBalance)
          ).toFixed(5)}{" "}
          BTC
        </span>
      </div>
      <div className="flex flex-row justify-between px-2">
        <span>거래 기간</span>
        <span>2022년 09월 01일 ~ 2023년 10월 11일</span>
      </div>
      {/* 공매수/공매도 현재 거래 자산 뷰 */}
      <div className="flex flex-row justify-between items-center pt-5">
        <div className="w-1/2 flex flex-col bg-gray-100 items-center p-2 space-y-1 rounded-md mx-2">
          <h2 className="font-semibold text-md">공매수 거래 현황</h2>
          <div className="w-full flex flex-row justify-between px-2">
            <span>수량</span>
            <span>{data.bidCurrentQuantity} USD</span>
          </div>
          <div className="w-full flex flex-row justify-between px-2">
            <span>수익(률)</span>
            <span>{data.bidEarningRate.toFixed(2)}%</span>
          </div>
          <div className="w-full flex flex-row justify-between px-2">
            <span>청산가</span>
            <span>{data.bidLiquidationPrice.toFixed(2)} USD</span>
          </div>
        </div>
        <div className="w-1/2 flex flex-col bg-gray-100 items-center p-2 space-y-1 rounded-md m-2">
          <h2 className="font-semibold text-md">공매수 거래 현황</h2>
          <div className="w-full flex flex-row justify-between px-2">
            <span>수량</span>
            <span>{data.askCurrentQuantity} USD</span>
          </div>
          <div className="w-full flex flex-row justify-between  px-2">
            <span>수익(률)</span>
            <span>{data.askEarningRate.toFixed(2)}%</span>
          </div>
          <div className="w-full flex flex-row justify-between px-2">
            <span>청산가</span>
            <span>
              {data.askLiquidationPrice == 1.0e8
                ? data.askLiquidationPrice
                : data.askLiquidationPrice.toFixed(2)}{" "}
              USD
            </span>
          </div>
        </div>
      </div>
      {/* 공매수/공매도 세부 자산 뷰 */}
      <div className="flex flex-row justify-between items-center pt-5">
        <div className="w-1/2 flex flex-col bg-gray-200 items-center p-2 space-y-1 rounded-md mx-2">
          <h2 className="font-semibold text-md">공매수 자산 현황</h2>
          <div className="w-full flex flex-row justify-between px-2">
            <span>총 자산</span>
            <span>{(data.bidBalance / BTC_USD).toFixed(5)} BTC</span>
          </div>
          <div className="w-full flex flex-row justify-between px-2">
            <span>가용 자산</span>
            <span>{(data.bidAvailableBalance / BTC_USD).toFixed(5)} BTC</span>
          </div>
          <div className="w-full flex flex-row justify-between px-2">
            <span>수익(률)</span>
            <span>{0} %</span>
          </div>
        </div>
        <div className="w-1/2 flex flex-col bg-gray-200 items-center p-2 space-y-1 rounded-md m-2">
          <h2 className="font-semibold text-md">공매도 자산 현황</h2>
          <div className="w-full flex flex-row justify-between px-2">
            <span>총 자산</span>
            <span>{(data.askBalance / BTC_USD).toFixed(5)} BTC</span>
          </div>
          <div className="w-full flex flex-row justify-between  px-2">
            <span>가용 자산</span>
            <span>{(data.askAvailableBalance / BTC_USD).toFixed(5)} BTC</span>
          </div>
          <div className="w-full flex flex-row justify-between px-2">
            <span>수익(률)</span>
            <span>{0} %</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSummaryBox;
