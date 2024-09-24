import Image from 'next/image';
import Link from 'next/link';
import { OrderItem } from '../types';

interface RefundOrderItemsProps {
  items: OrderItem[];
  orderNumber: string;
}

export default function RefundOrderItems({ items, orderNumber }: RefundOrderItemsProps) {
  if (!items || items.length === 0) {
    return <p>No items found for this order.</p>;
  }

  return (
    <div className="flex p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <div
            key={item.product_id}
            className="border border-[#e5e5e5] p-4 rounded-xl text-right flex flex-col justify-between"
          >
            <div className="relative h-40 w-40 mx-auto mb-4">
              <Image
                src={item.image}
                alt={item.product_name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            <p className="text-[#a3a3a3] text-xs h-5 text-right">{item.brand}</p>
            <p className="text-black font-semibold text-sm h-10 text-right">{item.product_name}</p>

            <div className="flex justify-between items-center mt-2">
              <p className="text-[#737373]">تعداد: {item.qty.toLocaleString('fa-IR')}</p>
              <div className="flex items-center">
                <p className="font-bold">{item.price.toLocaleString('fa-IR')}</p>
                <p className="mr-1 text-xs">تومان</p>
              </div>
            </div>

            {item.refundable ? (
              <Link
                href={{
                  pathname: `/ordered-refund/${item.product_id}`,
                  query: { order_number: orderNumber },
                }}
                passHref
              >
                <div className="mt-2 text-[#FB923C] flex items-center justify-end">
                  <span>درخواست مرجوعی</span>
                  <p className="mr-2">{`>`}</p>
                </div>
              </Link>
            ) : (
              <p className="mt-2 text-red-500">امکان درخواست مرجوعی ندارد</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
