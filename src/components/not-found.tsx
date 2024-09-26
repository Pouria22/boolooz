
export type NotFountText = {
  text: string;
}

export function NotFound({ text }: NotFountText) {
  return (
    <div className="flex-grow mx-4">
      <p className="text-center text-gray-500">{text}</p>
    </div>
  );
}
