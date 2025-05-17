import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { GoogleAnalytics } from "@next/third-parties/google";

const font = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Criptokuz",
  description:
    "Bienvenido a nuestra página, aca vas a encontrar información de como convertirte en trader.",
  icons: ["/favicon.png"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`dark ${font.className}`}
      >
        <GoogleAnalytics gaId="G-6SM89PPRHD" />
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
