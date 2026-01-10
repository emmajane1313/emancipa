import PosterEntry from "@/app/components/Common/modules/PosterEntry";
import { getDictionary } from "../../[lang]/dictionaries";
import { Suspense } from "react";
import Wrapper from "../../components/Common/modules/Wrapper";
import {
  IMAGE_SET,
  INFURA_GATEWAY_INTERNAL,
  LOCALES,
} from "../../lib/constantes";
import { Metadata } from "next";
import { cleanTitle } from "@/app/lib/helpers/cleanTitle";

export async function generateStaticParams() {
  return IMAGE_SET.map((elemento) => ({
    title: cleanTitle(elemento?.title),
  }));
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ title: string }>;
}): Promise<Metadata> => {
  const { title } = await params;

  const elemento = IMAGE_SET?.find((imag) => cleanTitle(imag.title) === title);

  return {
    title: elemento?.title,
    description: elemento?.alt,
    alternates: {
      canonical: `https://emancipa.xyz/poster/${cleanTitle(elemento?.title!)}/`,
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

export default async function Poster({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const dict = await (getDictionary as (locale: any) => Promise<any>)("en");
  const { title } = await params;
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
            url: `https://emancipa.xyz/poster/${cleanTitle(elemento?.title!)}/`,
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
      <Wrapper
        dict={dict}
        page={
          <Suspense fallback={<></>}>
            <PosterEntry elemento={elemento!} />
          </Suspense>
        }
      />
    </>
  );
}
