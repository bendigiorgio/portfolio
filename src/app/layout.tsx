import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import { Providers } from "@/components/Providers";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Ben Di Giorgio",
  description: "Portfolio of Benjamin Di Giorgio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} `}>
      <body
        className={`${roboto.className} bg-background px-1 py-3 text-soft-peach-50`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
