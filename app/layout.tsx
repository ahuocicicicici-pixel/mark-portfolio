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
    title: "Mark Shi — Creator Growth & AI Operations Product",
    description: "5+ 年海外红人营销经验，负责 Creator Growth 业务与 6 人运营团队，并独立开发已在内部持续使用的 Creator Operations OS。",
    icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
    openGraph: {
      title: "Mark Shi — Creator Growth & AI Operations Product",
      description: "I lead overseas creator growth and turn frontline operations into working AI products.",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: "Mark Shi — Creator Growth & AI Operations Product" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Mark Shi — Creator Growth & AI Operations Product",
      description: "I lead overseas creator growth and turn frontline operations into working AI products.",
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
