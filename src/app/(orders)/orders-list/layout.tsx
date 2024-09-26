import "../../../styles/globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import localFont from "next/font/local";

const iranSansFont = localFont({
  src: "../../../../public/fonts/IRANSans.ttf",
});

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode
}) {
  return (
    <div className={iranSansFont.className}>
      <Header />
      {modal}
      <main>{children}</main>
      <Footer />
    </div>
  );
}
