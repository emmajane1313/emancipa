import { NextResponse } from "next/server";
import { IMAGE_SET, INFURA_GATEWAY_INTERNAL } from "../lib/constantes";

const locales = [
  "en", "es", "fr", "fa", "uk", "ar", "pt", "he", "yi", "ja", "hu", "tr", "ym",
];

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://emancipa.xyz";

  const imagesXml = (locale: string) =>
    IMAGE_SET.map(
      (img) => `
        <image:image>
          <image:loc>${INFURA_GATEWAY_INTERNAL}${img.imagen}</image:loc>
          <image:title><![CDATA[${img.alt} | Emancipa | Emma-Jane MacKinnon-Lee]]></image:title>
          <image:caption><![CDATA[${img.alt} | Emancipa | Emma-Jane MacKinnon-Lee]]></image:caption>
        </image:image>
      `
    ).join("");

  const localeUrls = locales
    .map((locale) => {
      const altLinks = locales
        .map(
          (alt) => `
          <xhtml:link rel="alternate" hreflang="${alt}" href="${baseUrl}/${alt}" />
        `
        )
        .join("");

      return `
      <url>
        <loc>${baseUrl}/${locale}</loc>
        ${altLinks}
        <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/${locale}" />
        ${imagesXml(locale)}
      </url>`;
    })
    .join("");

  const rootUrl = `
    <url>
      <loc>${baseUrl}/</loc>
      ${locales
        .map(
          (locale) => `
        <xhtml:link rel="alternate" hreflang="${locale}" href="${baseUrl}/${locale}" />
      `
        )
        .join("")}
      <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/" />
      ${imagesXml("en")} <!-- fallback images for root -->
    </url>
  `;

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
  ${rootUrl}
  ${localeUrls}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
