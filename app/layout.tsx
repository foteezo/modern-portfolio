import type { Metadata } from "next";
import { RootLayout } from "@prosophia/personal-portfolio/layouts";
import config from "@/prosophia.config";
import "@prosophia/personal-portfolio/styles";
import "./globals.css";

export const metadata: Metadata = {
  title: config.site.name,
  description: config.site.tagline,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout config={config}>{children}</RootLayout>;
}
