import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";

export const metadata = {
  title: "NES Energy Group — Batteriespeicher",
  description: "NES liefert Sodium-Ionen und Lithium-Ionen Batteriespeicher für Industrie, Stadtwerke und Energiehandel. Schlüsselfertig, betreut aus Deutschland.",
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
