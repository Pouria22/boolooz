import Image from 'next/image';
import stepperPic from '../../../../public/stepper-step-tow.svg';

export default function Refund() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-800 rtl">
      <div className="flex justify-center items-center py-4">
        <Image src={stepperPic} alt="Stepper" className="w-1/3" />
      </div>
    </main>
  );
}