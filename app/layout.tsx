import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
