import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const image = new URL("/og.png", origin).toString();

  return {
    title: "Mark — Creator Marketing & Systems",
    description: "我从 2021 年开始做海外红人营销。项目多了，团队大了，也开始自己搭系统。",
    icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
    openGraph: {
      title: "Mark — Creator Marketing & Systems",
      description: "I lead creator operations—and build the systems behind it.",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: "Mark — Creator Marketing & Systems" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Mark — Creator Marketing & Systems",
      description: "I lead creator operations—and build the systems behind it.",
      images: [image],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
