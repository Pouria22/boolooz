import Link from "next/link";
import Image from "next/image";
import { Order, OrderItem } from "../../types";
import { NotFound } from "../not-found";

interface OrderItemProps {
  order: Order;
}

export default function OrderListItem({ order }: OrderItemProps) {
  return (
    <div className="border border-[#e5e5e5] rounded-lg p-4 flex justify-between items-center">
      <div className="flex-1">
        <OrderHeader orderNumber={order.order_number} />

        <div className="border-dashed border-t border-[#e5e5e5] my-1"></div>

        <OrderStatus status={order.status} />
        <OrderDate createdAt={order.created_at} />
        <OrderItems items={order.order_items} />
      </div>
    </div>
  );
}

function OrderHeader({ orderNumber }: { orderNumber: string }) {
  return (
    <div className="flex justify-between items-center mb-3">
      <span className="font-bold">
        شماره سفارش: {Number(orderNumber).toLocaleString("fa-IR")}
      </span>
      <Link href={`/orders-list/${orderNumber}`} passHref>
        <span className="text-[#FB923C] border-2 border-[#FB923C] px-2 py-1 rounded-lg cursor-pointer whitespace-nowrap">
          درخواست مرجوعی
        </span>
      </Link>
    </div>
  );
}

function OrderStatus({ status }: { status: string }) {
  return (
    <div className="flex justify-between text-sm mb-2">
      <span className="font-semibold">وضعیت سفارش</span>
      <span className="text-[#16a34a]">
        {status === "delivered" ? "تحویل داده شده" : "در حال پردازش"}
      </span>
    </div>
  );
}

function OrderDate({ createdAt }: { createdAt: Date }) {
  return (
    <div className="flex justify-between text-sm mb-2">
      <span className="font-semibold">تاریخ سفارش</span>
      <span>{new Date(createdAt).toLocaleDateString("fa-IR")}</span>
    </div>
  );
}

function OrderItems({ items }: { items: OrderItem[] }) {
  if (!items || items.length === 0) {
    return <NotFound text={'آیتمی پیدا نشد'} />
  }

  return (
    <div className="flex flex-row space-x-1 rtl:space-x-reverse">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative w-full max-w-[100px] sm:max-w-[100px] md:max-w-[100px] aspect-square"
        >
          <Image
            src={item.image}
            alt={`Order item ${index}`}
            fill
            className="rounded-lg"
            sizes="(max-width: 640px) 100vw, 100px"
          />
        </div>
      ))}
    </div>
  );
}
