import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";

export const metadata = {
  title: "NES Energy Group — Sodium-Ionen Batteriespeicher",
  description: "NES liefert maßgeschneiderte Sodium-Ionen Batteriespeicher-Container. Sicher, umweltfreundlich, bis zu 20% günstiger als Lithium-Ionen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="relative">
        <LanguageProvider>
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
