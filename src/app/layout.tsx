import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body
        className={`${inter.className}  bg-secondary px-1 py-3 text-soft-peach-50 2xs:px-4`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
