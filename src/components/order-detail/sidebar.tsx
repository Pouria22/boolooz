import { Order } from "../../types";

interface RefundOrderDetailsProps {
  order: Order;
}

export default function Sidebar({ order }: RefundOrderDetailsProps) {
  return (
    <div className="h-4/6 w-1/5 border border-[#e5e5e5] bg-white rounded-xl p-5 m-4">
      <h2 className="font-bold mb-2 text-right">اطلاعات سفارش</h2>
      <div className="flex justify-between">
        <p className="text-center">شماره سفارش:</p>
        <p className="text-center">{order.order_number}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-center">تاریخ سفارش:</p>
        <p className="text-center">
          {new Date(order.created_at).toLocaleDateString("fa-IR")}
        </p>
      </div>
      <button className="mt-4 w-full py-2 rounded-lg bg-gray-300 text-gray-600 cursor-not-allowed">
        ادامه و تایید
      </button>
    </div>
  );
}
