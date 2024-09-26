export function NotFound({ text }: { text: string }) {
  return (
    <div className="flex-grow mx-4">
      <p className="text-center text-gray-500">{text}</p>
    </div>
  );
}
