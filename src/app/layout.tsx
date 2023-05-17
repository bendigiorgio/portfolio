import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";

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
        className={`${roboto.className} bg-secondary px-1 py-3 text-soft-peach-50 2xs:px-4`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
