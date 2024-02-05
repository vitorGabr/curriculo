import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const fire = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Currículo - Vitor Gabriel de Jesus",
  description: "Um Curriculo de um desenvolvedor web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={fire.className}>{children}</body>
    </html>
  );
}
