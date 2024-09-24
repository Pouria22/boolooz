export interface OrderItem {
  product_id: number;
  image: string;
  product_name: string;
  price: number;
  refundable: boolean;
  brand: string;
  qty: number;
}

export interface Order {
  order_id: number;
  order_number: string;
  created_at: Date;
  status: string;
  order_items: OrderItem[];
}

export interface RefundData {
  product_id: number;
  image: string;
  product_name: string;
  price: number;
  refundable: boolean;
  brand: string;
  qty: number;
}
