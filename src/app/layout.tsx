import { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "بلوز",
  description: "فروشگاه هوشمند خرید پوشاک",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
