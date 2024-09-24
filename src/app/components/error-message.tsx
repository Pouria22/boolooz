// app/components/ErrorMessage.tsx
export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <p className="text-red-500">Something went wrong: {message}</p>
    </div>
  );
}
