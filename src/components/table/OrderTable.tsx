import { convertStringToDate } from "@/utils/dateFormat";
import { Order } from "@/services/orders/get";
import { cls } from "@/utils/class-name";

interface BaseTableProps {
  bodies: Order[];
}

const headers = [
  "호가 시간",
  "수량",
  "호가 가격",
  "주문 방식",
  "거래 방향",
  "주문 ID",
];

const OrderTable = ({ bodies }: BaseTableProps) => {
  function translateOrdType(ordType: string) {
    if (ordType === "Limit") {
      return "지정가구매";
    } else if (ordType === "Market") {
      return "시장가구매";
    } else if (ordType === "Stop") {
      return "시장가판매";
    } else if (ordType === "StopLimit") {
      return "지정가판매";
    }
  }

  return (
    <div className="overflow-x-auto shadow-md h-96">
      <table className="w-full text-sm  text-gray-500 dark:text-gray-400 ">
        <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-[1px]">
          <tr>
            {headers.map((header, index) => {
              return (
                <th key={index} scope="col" className="px-5 py-3 truncate">
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {bodies.map((body, index) => {
            return (
              <tr
                key={index}
                className={cls(
                  "bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center",
                  body.isCancelled ? "bg-red-50" : "",
                )}
              >
                <td className="px-3 py-2 truncate">
                  {convertStringToDate(body.orderTime)}
                </td>
                <td className="px-3 py-2 truncate ">{body.quantity}</td>
                <td className="px-3 py-2 truncate">
                  {(body.side === "Sell" && "-") + body.price.toString()}
                </td>
                <td className="px-3 py-2 truncate">
                  {translateOrdType(body.ordType)}
                </td>

                <td className="px-3 py-2 truncate">
                  {body.position ? "공매수" : "공매도"}
                </td>
                <td className="px-3 py-2 truncate">{body.orderID}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default OrderTable;
