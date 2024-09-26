import OrderList from "@/components/orders-list/order-list";
import ErrorMessage from "@/components/error-message";
import { fetchWrapper } from "@/server-actions/fetch-wrapper";
import { Stepper } from "@/components/stepper/stepper";
import { Order } from "@/types";
import { NotFound } from "@/components/not-found";

export default async function Page() {
  const endpoint = `/orders/`;
  const { data, error } = await fetchWrapper<Order[]>(endpoint);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-800 rtl">
      <Stepper src={"/stepper-step-one.svg"} />
      <div className="text-right mx-4 py-4 border-b border-gray-200">
        <h2 className="font-semibold text-xl">درخواست مرجوعی کالا</h2>
      </div>
      {data ? (
        <OrderList orders={data} />
      ) : (
        <NotFound text={"سفارشی پیدا نشد"} />
      )}
    </main>
  );
}
