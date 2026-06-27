import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Henry Matheus — Analista de Dados | Python, SQL, ERP & Power BI",
  description:
    "Analista de Dados com foco em automações Python, SQL, Power BI, ERP, Deneb, HTML Content e transformação de dados operacionais em indicadores de negócio.",
  keywords:
    "analista de dados, data analyst, power bi, python, sql, erp, totvs, abr telecom, deneb, html content, dax, power query, automação, business intelligence",
  openGraph: {
    title: "Henry Matheus — Analista de Dados | Python, SQL, ERP & Power BI",
    description:
      "Automação, ERP, SQL e BI avançado para transformar dados operacionais em decisões práticas.",
    type: "website",
    locale: "pt_BR",
  },
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
