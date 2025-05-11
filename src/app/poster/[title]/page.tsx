import PosterEntry from "@/app/components/Common/modules/PosterEntry";
import { getDictionary } from "../../[lang]/dictionaries";
import { Suspense } from "react";
import Wrapper from "../../components/Common/modules/Wrapper";
import { IMAGE_SET, INFURA_GATEWAY_INTERNAL } from "../../lib/constantes";
import { Metadata } from "next";
import { cleanTitle } from "@/app/image-sitemap.xml/route";

export async function generateStaticParams() {
  return IMAGE_SET.map((elemento) => ({
    title: elemento?.title,
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
    <Wrapper
      dict={dict}
      page={
        <Suspense fallback={<></>}>
          <PosterEntry elemento={elemento!} />
        </Suspense>
      }
    />
  );
}
