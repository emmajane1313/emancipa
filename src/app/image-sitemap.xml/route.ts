import { NextResponse } from "next/server";
import { IMAGE_SET, INFURA_GATEWAY_INTERNAL } from "../lib/constantes";
import { cleanTitle } from "../lib/helpers/cleanTitle";

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
  "gd",
];

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://emancipa.xyz";

  const imagesXml = () =>
    IMAGE_SET.map(
      (image) =>
        `
    <url>
      <loc>${baseUrl}/poster/${cleanTitle(image?.title)}/</loc>
      ${locales
        .map(
          (locale) => `
        <xhtml:link rel="alternate" hreflang="${locale}" href="${baseUrl}/${locale}/poster/${cleanTitle(
            image?.title
          )}/" />
      `
        )
        .join("")}
      <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/poster/${cleanTitle(
          image?.title
        )}/" />
      <image:image>
        <image:loc>${INFURA_GATEWAY_INTERNAL}${image.imagen}</image:loc>
        <image:title><![CDATA[${
          image.alt
        } | Emancipa | Emma-Jane MacKinnon-Lee]]></image:title>
        <image:caption><![CDATA[${
          image.alt
        } | Emancipa | Emma-Jane MacKinnon-Lee]]></image:caption>
      </image:image>
    </url>
      `
    ).join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
  ${imagesXml()}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
