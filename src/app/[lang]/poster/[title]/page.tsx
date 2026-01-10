import PosterEntry from "@/app/components/Common/modules/PosterEntry";
import {
  IMAGE_SET,
  INFURA_GATEWAY_INTERNAL,
  LOCALES,
} from "@/app/lib/constantes";
import { cleanTitle } from "@/app/lib/helpers/cleanTitle";
import { Metadata } from "next";

export type posterParams = Promise<{ title: string; lang: string }>;

export async function generateStaticParams() {
  return IMAGE_SET.map((elemento) => ({
    title: cleanTitle(elemento?.title),
  }));
}

export const generateMetadata = async ({
  params,
}: {
  params: posterParams;
}): Promise<Metadata> => {
  const { title, lang } = await params;

  const elemento = IMAGE_SET?.find((imag) => cleanTitle(imag.title) === title);

  return {
    title: elemento?.title,
    description: elemento?.alt,
    alternates: {
      canonical: `https://emancipa.xyz/${lang}/poster/${cleanTitle(
        elemento?.title!
      )}/`,
      languages: LOCALES.reduce((acc, item) => {
        acc[item] = `https://emancipa.xyz/${item}/poster/${cleanTitle(
          elemento?.title!
        )}/`;
        return acc;
      }, {} as { [key: string]: string }),
    },
    openGraph: {
      images: `${INFURA_GATEWAY_INTERNAL}${elemento?.imagen}/`,
    },
  };
};

export default async function Poster({ params }: { params: posterParams }) {
  const { title, lang } = await params;
  const elemento = IMAGE_SET?.find((imag) => cleanTitle(imag.title) === title);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageObject",
            name: elemento?.title,
            description: elemento?.alt,
            contentUrl: `${INFURA_GATEWAY_INTERNAL}${elemento?.imagen}`,
            url: `https://emancipa.xyz/${lang}/poster/${cleanTitle(elemento?.title!)}/`,
            creator: {
              "@type": "Person",
              name: "Emma-Jane MacKinnon-Lee",
              url: "https://emmajanemackinnonlee.com/"
            },
            copyrightNotice: "CC0",
            license: "https://creativecommons.org/publicdomain/zero/1.0/",
            creditText: "Emma-Jane MacKinnon-Lee | Emancipa | DIGITALAX",
            width: elemento?.anchura,
            height: elemento?.altura,
            keywords: "Web3 Fashion, DIGITALAX, Emma-Jane MacKinnon-Lee, Digital Art, Crypto Fashion, NFT Fashion"
          }),
        }}
      />
      <PosterEntry elemento={elemento!} />
    </>
  );
}
