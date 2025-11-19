import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Henry Portfolio - Analista de Dados & BI",
  description: "Portfólio profissional de Henry Matheus - Especialista em Business Intelligence e Análise de Dados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/koala-favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/koala-favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased bg-black-100`}>{children}</body>
    </html>
  );
}
