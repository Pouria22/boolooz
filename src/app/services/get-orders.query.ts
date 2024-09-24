import { Order } from "../types";

export interface GetOrdersResponse {
  data: Order[] | null;
  error: string | null;
}

export default async function getOrders(): Promise<GetOrdersResponse> {
  try {
    const response = await fetch(`https://blz-refund.liara.run/orders/`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json: Order[] = await response.json();
    return { data: json, error: null };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { data: null, error: error.message };
    }
    return { data: null, error: 'An unexpected error occurred' };
  }
}