import type { Metadata } from "next";
import "@/app/ui/globals.css";

export const metadata: Metadata = {
  title: "Inventory System",
  description: "Inventory System for a WareHouse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
