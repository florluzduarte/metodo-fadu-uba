import type { Metadata } from "next";
import { fira } from "@/fonts/fonts";
import "./globals.css";
import { Navbar, SideMenu } from "@/components";

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
      <body className={`${fira.className} bg-gray-100 text-black`}>
        <Navbar />
        <SideMenu />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
