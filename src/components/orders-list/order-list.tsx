import { Order } from "../../types";
import { NotFound } from "../not-found";
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
          <NotFound text={'سفارشی پیدا نشد'} />
        )}
      </div>
    </div>
  );
}
