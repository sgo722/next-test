import { TradeSummary } from "@/services/trades/get";
import { convertStringToDate } from "@/utils/dateFormat";

interface BaseTableProps {
  bodies: TradeSummary[];
}

const headers = [
  "구매 주문 시간",
  "수량",
  "구매 가격",
  "구매 시간",
  "판매 주문 시간",
  "판매 가격",
  "판매 시간",
  "구매 ID",
  "판매 ID",
];

const TradeSummaryTable = ({ bodies }: BaseTableProps) => {
  return (
    <div className="overflow-x-auto shadow-md h-48">
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
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-3 py-2 truncate">
                  {convertStringToDate(body.buyOrderTime)}
                </td>
                <td className="px-3 py-2 truncate ">{body.orderQty}</td>
                <td className="px-3 py-2 truncate">{body.buyPrice}</td>
                <td className="px-3 py-2 truncate">
                  {convertStringToDate(body.buyTime)}
                </td>

                <td className="px-3 py-2 truncate">
                  {convertStringToDate(body.sellOrderTime)}
                </td>
                <td className="px-3 py-2 truncate">{body.sellPrice}</td>
                <td className="px-3 py-2 truncate">
                  {convertStringToDate(body.sellTime)}
                </td>
                <th scope="row" className="px-3 py-2 truncate">
                  {body.buyOrderID}
                </th>

                <td className="px-3 py-2 truncate">{body.sellOrderID}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default TradeSummaryTable;
