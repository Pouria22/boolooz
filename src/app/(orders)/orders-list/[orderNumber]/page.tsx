import { fetchWrapper } from "@/server-actions/fetch-wrapper";
import Sidebar from "@/components/order-detail/sidebar";
import OrderDetailList from "@/components/order-detail/order-detail-list";
import { Order } from "@/types";
import ErrorMessage from "@/components/error-message";
import { Stepper } from "@/components/stepper/stepper";
import { NotFound } from "@/components/not-found";

export default async function Page({
  params,
}: {
  params: { orderNumber: string };
}) {
  const endpoint = `/orders/`;
  const { data, error } = await fetchWrapper<Order[]>(endpoint);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  const orderData = data?.find(
    (o: Order) => o.order_number === params.orderNumber
  );
  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-800 rtl">
      <Stepper src={"/stepper-step-two.svg"} />
      <div className="flex justify-around text-gray-800">
        {orderData ? (
          <>
            <OrderDetailList
              items={orderData?.order_items}
              orderNumber={params.orderNumber}
            />
            <Sidebar order={orderData} />
          </>
        ) : (
          <NotFound text={"سفارشی پیدا نشد"} />
        )}
      </div>
    </main>
  );
}
