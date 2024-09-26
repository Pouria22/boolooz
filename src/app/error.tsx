"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-semibold text-red-600 mb-4">
        خطایی رخ داده است
      </h2>
      <p className="text-gray-600 mb-6">
        یک خطا در برنامه رخ داده است. لطفا دوباره تلاش کنید.
      </p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        دوباره امتحان کنید
      </button>
    </div>
  );
}
