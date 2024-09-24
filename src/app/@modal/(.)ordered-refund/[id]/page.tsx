import getOrders from "../../../services/get-orders.query";
import RefundModalContext from "../../../components/refund-modal-context";
import { OrderItem, Order } from "../../../types";
import Modal from "@/app/components/modal";

interface OrderedRefundProps {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function OrderedRefund({ params: { id }, searchParams }: OrderedRefundProps) {
  const { data } = await getOrders();

  const orderData: Order | undefined = data?.find((o: Order) => o.order_number === searchParams?.order_number);

  const refundData: OrderItem | undefined = orderData?.order_items.find((r) => r.product_id === Number(id));

  if (!orderData) {
    return <div>Order not found. Please check the order number.</div>;
  }

  if (!refundData) {
    return <div>Product not found for refund. Please check the product ID.</div>;
  }

  return (
    <Modal>
      <RefundModalContext {...refundData} />
    </Modal>
  );
}
