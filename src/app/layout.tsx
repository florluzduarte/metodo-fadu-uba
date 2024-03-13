import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metodología | Ex-Galán",
  description: "Sitio web de la materia Metodología de la investigación en Diseño, Cátedra Ex-Galán, de la Universidad de Buenos Aires (FADU-UBA)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <h1>Layout</h1>
        {children}
      </body>
    </html>
  );
}
