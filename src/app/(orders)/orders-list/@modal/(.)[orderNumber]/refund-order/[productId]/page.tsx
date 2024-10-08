import { fetchWrapper } from "@/server-actions/fetch-wrapper";
import RefundModalContext from "@/components/refund-modal/refund-modal-context";
import { Order } from "@/types";
import ErrorMessage from "@/components/error-message";
import { NotFound } from "@/components/not-found";
import Modal from "@/components/modal";

export type Props = {
  params: {
    orderNumber: string;
    productId: string;
  }
};
export default async function OrderedRefund({params: {orderNumber, productId}}: Props) {
  const endpoint = `/orders/`;
  const { data, error } = await fetchWrapper<Order[]>(endpoint);

  if (error) {
    return <ErrorMessage message={error} />;
  }
  const orderData = data?.find(
    (o: Order) => o.order_number === orderNumber
  );

  const refundData = orderData?.order_items.find(
    (r) => r.product_id === Number(productId)
  );

  if (!orderData) {
    return <NotFound text={"سفارشی پیدا نشد"} />;
  }

  if (!refundData) {
    return <NotFound text={"محصول مورد نظر در سفارش پیدا نشد"} />;
  }

  return (
    <Modal>
      <RefundModalContext {...refundData} />)
    </Modal>
  );
}
