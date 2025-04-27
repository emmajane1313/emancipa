import { NextResponse } from "next/server";
import { IMAGE_SET, INFURA_GATEWAY } from "../lib/constantes"; 

const locales = [
  "en",
  "es",
  "fr",
  "fa",
  "uk",
  "ar",
  "pt",
  "he",
  "yi",
  "ja",
  "hu",
  "tr",
  "ym",
]; 
export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://emancipa.xyz";

  const imagesXml = (locale: string) =>
    IMAGE_SET.map(
      (img) => `
      <image:image>
        <image:loc>${INFURA_GATEWAY}/ipfs/${img.imagen}</image:loc>
        <image:title><![CDATA[${img.alt} | Emancipa | Emma-Jane MacKinnon-Lee]]></image:title>
        <image:caption><![CDATA[${img.alt} | Emancipa | Emma-Jane MacKinnon-Lee]]></image:caption>
      </image:image>
    `
    ).join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
  ${locales
    .map(
      (locale) => `
    <url>
      <loc>${baseUrl}/${locale}</loc>
      ${locales
        .map(
          (altLocale) => `
        <xhtml:link rel="alternate" hreflang="${altLocale}" href="${baseUrl}/${altLocale}" />
        `
        )
        .join("")}
      <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/en" />
      ${imagesXml(locale)}
    </url>
  `
    )
    .join("")}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
