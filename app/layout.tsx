import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RertX — 新一代 AI 聚合平台",
  description:
    "RertX 整合自研 AI 模型（RertMiniX、RertMaX、RertMvX）与全球顶尖大模型，提供极致的多模态对话、API 接入、知识库与工作流能力。",
  keywords: ["AI", "聚合平台", "大语言模型", "RertX", "Ruanftrix", "RertMiniX", "RertMaX", "RertMvX"],
  authors: [{ name: "Ruanftrix", url: "mailto:support@ruanftrix.cn" }],
  icons: {
    icon: "https://luckycola.com.cn/public/imgs/luckycola_Imghub_forever_94qiNkBL17819450905245515.png",
  },
  openGraph: {
    title: "RertX — 新一代 AI 聚合平台",
    description: "整合自研模型与全球顶尖 AI，一站式智能体验",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
