export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <p className="text-red-500">خطایی رخ داده است: {message}</p>
    </div>
  );
}
