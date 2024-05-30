import { Inter } from "next/font/google";
import "./globals.css";
import { Honk } from "next/font/google";

const honk = Honk({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "YASIN inc",
  description: "portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
