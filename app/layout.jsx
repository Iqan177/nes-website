import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "NES — Sodium-Ionen Batteriespeicher",
  description:
    "NES liefert maßgeschneiderte Sodium-Ionen Batteriespeicher in Container-Bauweise. Sicher, umweltfreundlich, bis zu 20 % günstiger als Lithium-Ionen. Made in Germany.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="relative">
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
