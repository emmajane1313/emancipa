import { NextResponse } from "next/server";
import { IMAGE_SET, INFURA_GATEWAY } from "../lib/constantes";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://emancipa.xyz";

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
  <url>
    <loc>${baseUrl}</loc>
    ${IMAGE_SET.map(
      (img) => `
      <image:image>
        <image:loc>${INFURA_GATEWAY}/ipfs/${img.imagen}</image:loc>
        <image:title><![CDATA[${img.alt} | Emancipa | Emma-Jane MacKinnon-Lee]]></image:title>
        <image:caption><![CDATA[${img.alt} | Emancipa | Emma-Jane MacKinnon-Lee]]></image:caption>
      </image:image>
    `
    ).join("")}
  </url>
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
