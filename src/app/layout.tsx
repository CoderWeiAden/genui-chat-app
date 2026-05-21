import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "启源 AI · 智能助手",
  description: "由 DeepSeek 驱动的新一代 AI 智能助手，支持生成式交互界面",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
