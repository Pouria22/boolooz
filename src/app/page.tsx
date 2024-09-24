import stepperPic from '../../public/stepper-step-one.svg';
import Image from 'next/image';
import OrderList from './components/order-list';
import ErrorMessage from './components/error-message';
import getOrders from './services/get-orders.query';

export default async function Page() {
  const { data, error } = await getOrders();

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-800 rtl">
      <div className="flex justify-center items-center py-4">
        <Image src={stepperPic} alt="Stepper" className="w-1/3" />
      </div>

      <div className="text-right mx-4 py-4 border-b border-gray-200">
        <h2 className="font-semibold text-xl">درخواست مرجوعی کالا</h2>
      </div>

      <OrderList orders={data} />
    </main>
  );
}
