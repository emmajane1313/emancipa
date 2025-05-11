import { NextResponse } from "next/server";
import { IMAGE_SET, INFURA_GATEWAY_INTERNAL } from "../lib/constantes";

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

  const imagesXml = () =>
    IMAGE_SET.map(
      (image) =>
        `
    <url>
      <loc>${baseUrl}/poster/${image?.title
          ?.toLowerCase()
          ?.replaceAll(":", "__")
          ?.replaceAll(",", "_")
          ?.replaceAll(" ", "-")}/</loc>
      ${locales
        .map(
          (locale) => `
        <link rel="alternate" hreflang="${locale}" href="${baseUrl}/${locale}/poster/${image?.title
            ?.toLowerCase()
            ?.replaceAll(":", "__")
            ?.replaceAll(",", "_")
            ?.replaceAll(" ", "-")}/" ></link>
      `
        )
        .join("")}
      <link rel="alternate" hreflang="x-default" href="${baseUrl}/poster/${image?.title
          ?.toLowerCase()
          ?.replaceAll(":", "__")
          ?.replaceAll(",", "_")
          ?.replaceAll(" ", "-")}" ></link>
<image:image>
          <image:loc>${INFURA_GATEWAY_INTERNAL}${image.imagen}/</image:loc>
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
