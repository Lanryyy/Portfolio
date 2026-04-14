import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Henry Matheus — Analista de Dados | BI & Analytics",
  description: "Analista de Dados com 3+ anos de experiência em Business Intelligence, ETL e automação. Power BI, Python, SQL. Dashboards executivos e insights estratégicos.",
  keywords: "analista de dados, power bi, python, sql, business intelligence, etl, data analyst, dashboards",
  openGraph: {
    title: "Henry Matheus — Analista de Dados | BI & Analytics",
    description: "Transformando dados complexos em decisões estratégicas com Power BI, Python e SQL.",
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
