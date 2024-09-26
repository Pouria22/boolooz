import "../../../styles/globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import localFont from "next/font/local";

const iranSansFont = localFont({
  src: "../../../../public/fonts/IRANSans.ttf",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={iranSansFont.className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
