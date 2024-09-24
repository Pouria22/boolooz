import getOrders from '../services/get-orders.query';
import Image from 'next/image';
import stepperPic from '../../../public/stepper-step-tow.svg';
import RefundOrderDetails from '../components/refund-order-details';
import RefundOrderItems from '../components/refund-order-items';
import { Order } from '../types';

interface RefundPageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function Page({ searchParams }: RefundPageProps) {
  const { data } = await getOrders();
  const orderData = data?.find((o: Order) => o.order_number === searchParams?.order_number);

  if (!orderData) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-800 rtl">
      <div className="flex justify-center items-center py-4">
        <Image src={stepperPic} alt="Stepper" className="w-1/3" />
      </div>

      <div className="flex justify-around text-gray-800">
        <RefundOrderItems items={orderData.order_items} orderNumber={orderData.order_number} />

        <RefundOrderDetails order={orderData} />
      </div>
    </main>
  );
}
