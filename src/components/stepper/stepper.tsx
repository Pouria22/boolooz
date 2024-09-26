import Image from "next/image";

export function Stepper({ src }: { src: string }) {
  return (
    <div className="flex justify-center items-center py-4">
      <Image
        src={src}
        alt="Stepper"
        width={400}
        height={200}
        priority
        className="object-contain"
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 40vw, 30vw"
      />
    </div>
  );
}
