import Link from 'next/link';
import Image from 'next/image';
import { Order } from '../types';

interface OrderItemProps {
  order: Order;
}

export default function OrderItem({ order }: OrderItemProps) {
  return (
    <div className="border border-[#e5e5e5] rounded-lg p-4 flex justify-between items-center">
      <div className="flex-1">
        <div className="flex justify-between items-center mb-3">
          <span className="font-bold">
            شماره سفارش: {Number(order.order_number).toLocaleString('fa-IR')}
          </span>
          <Link href="/orders/refund" passHref>
            <span className="text-[#FB923C] border-2 border-[#FB923C] px-2 py-1 rounded-lg cursor-pointer whitespace-nowrap">
              درخواست مرجوعی
            </span>
          </Link>
        </div>

        <div className="border-dashed border-t border-[#e5e5e5] my-1"></div>

        <div className="flex justify-between text-sm mb-2">
          <span className="font-semibold">وضعیت سفارش</span>
          <span className="text-[#16a34a]">
            {order.status === 'delivered' ? 'تحویل داده شده' : ''}
          </span>
        </div>

        <div className="flex justify-between text-sm mb-2">
          <span className="font-semibold">تاریخ سفارش</span>
          <span>{new Date(order.created_at).toLocaleDateString('fa-IR')}</span>
        </div>

        <div className="flex flex-row space-x-1 rtl:space-x-reverse">
          {order.order_items.map((item, index) => (
            <div key={index} className="relative w-full max-w-[100px] sm:max-w-[100px] md:max-w-[100px] aspect-square">
              <Image
                src={item.image}
                alt={`item-${index}`}
                layout="fill"
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
