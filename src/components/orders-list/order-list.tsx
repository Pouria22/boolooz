import { Order } from "../../types";
import OrderListItem from "./order-list-item";

export default function OrderList({ orders }: { orders: Order[] }) {
  return (
    <div className="flex-grow mx-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {orders.length ? (
          orders.map((order) => (
            <OrderListItem key={order.order_id} order={order} />
          ))
        ) : (
          <p className="col-span-2 text-center text-gray-500">
            No orders found.
          </p>
        )}
      </div>
    </div>
  );
}
