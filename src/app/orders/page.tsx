
import stepperPic from '../../../public/stepper-step-one.svg';
import Image from 'next/image'
import getOrders from './services/get-orders.query';
import OrderItem from './components/order-item';

export default async function Page() {
  const  {data, error} = await getOrders();

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-red-500">Something went wrong: {error}</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-800 rtl">
      <div className="flex justify-center items-center py-4">
        <Image src={stepperPic} alt="Stepper" className="w-1/3" />
      </div>

      <div className="text-right mx-4 py-4 border-gray-200">
        <h2 className="font-semibold text-xl">
          درخواست مرجوعی کالا
        </h2>
      </div>

      <div className="flex-grow mx-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data?.length ? (
            data.map((order) => (
              <OrderItem key={order.order_id} order={order} />
            ))
          ) : (
            <p className="col-span-2 text-center text-gray-500">No orders found.</p>
          )}
        </div>
      </div>
    </main>
  );
}
