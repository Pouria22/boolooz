"use client";

import { useState } from "react";
import { RefundData } from "../../types";
import Image from "next/image";

export default function RefundModalContext({
  image,
  product_name,
  brand,
  qty,
}: RefundData) {
  const [selectedQty, setSelectedQty] = useState<number | null>(null);
  const [refundReason, setRefundReason] = useState<string>("");

  const isFormValid = selectedQty !== null && refundReason.trim().length > 0;

  const handleQtyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value ? parseInt(e.target.value) : null;
    setSelectedQty(value);
  };

  const handleReasonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRefundReason(e.target.value);
  };
  return (
    <div className="bg-white rounded-lg p-10 w-full max-w-md">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          <Image
            src={image}
            alt={product_name}
            className="object-contain ml-4 rounded-lg"
            height={48}
            width={48}
          />
        </div>
        <div>
          <p className="text-sm mb-2">{brand}</p>
          <p className="text-sm font-semibold">{product_name}</p>
        </div>
      </div>

      <label htmlFor="qty" className="block mb-2 text-sm">
        تعداد
      </label>
      <select
        id="qty"
        className="w-full border-gray-300 rounded-lg mb-4 text-[#a3a3a3] focus:text-black border-2 px-1"
        value={selectedQty ?? ""}
        onChange={handleQtyChange}
        aria-label="Select quantity"
      >
        <option value="" disabled className="text-xs">
          تعداد مورد نظر خود را انتخاب کنید
        </option>
        {Array.from({ length: qty }, (_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>

      <label htmlFor="reason" className="block mb-2 text-sm">
        توضیحات مرجوعی
      </label>
      <textarea
        id="reason"
        rows={4}
        className="w-full rounded-lg mb-4 text-sm placeholder:text-xs p-2 border-2"
        value={refundReason}
        onChange={handleReasonChange}
        placeholder="توضیحات مرتبط به دلیل مرجوعی را بنویسید"
        aria-label="Refund reason"
        style={{ borderColor: "#a3a3a3" }}
      ></textarea>

      <button
        className={`w-full py-2 rounded-lg ${
          isFormValid
            ? "bg-[#FB923C] text-white"
            : "bg-gray-300 text-[#a3a3a3] cursor-not-allowed"
        }`}
        disabled={!isFormValid}
      >
        ثبت
      </button>
    </div>
  );
}
