import { LOCALES } from "@/middleware";
import { MetadataRoute } from "next";

export default async function robots(): Promise<MetadataRoute.Robots> {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: LOCALES.map(
      (lang) => `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`
    ),
  };
}
