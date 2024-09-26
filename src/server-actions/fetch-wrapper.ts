export interface FetchResponse<T> {
  data: T | null;
  error: string | null;
}

export async function fetchWrapper<T>(
  endpoint: string,
  options?: RequestInit
): Promise<FetchResponse<T>> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const url = `${baseUrl}${endpoint}`;

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json: T = await response.json();
    return { data: json, error: null };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { data: null, error: error.message };
    }
    return { data: null, error: "An unexpected error occurred" };
  }
}
