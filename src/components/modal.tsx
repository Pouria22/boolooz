"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useRef } from "react";

interface ModalProps {
  children: ReactNode;
}
export default function Modal({ children }: ModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function onModalHide() {
    router.back();
  }
  return (
    <dialog
      ref={modalRef}
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      onClose={onModalHide}
    >
      <div className="relative bg-white rounded-lg p-6">
        <>
          <button
            onClick={onModalHide}
            className=" text-gray-400 hover:text-gray-600"
          >
            &times;
          </button>
        </>
        <div className="flex justify-center items-center">
          <h2 className="text-lg font-bold">درخواست مرجوعی</h2>
        </div>
        {children}
      </div>
    </dialog>
  );
}
