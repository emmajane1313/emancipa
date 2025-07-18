import PosterEntry from "@/app/components/Common/modules/PosterEntry";
import { IMAGE_SET, INFURA_GATEWAY_INTERNAL } from "@/app/lib/constantes";
import { cleanTitle } from "@/app/lib/helpers/cleanTitle";
import { Metadata } from "next";

export type posterParams = Promise<{ title: string }>;

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

export default async function Poster({ params }: { params: posterParams }) {
  const { title } = await params;
  const elemento = IMAGE_SET?.find((imag) => cleanTitle(imag.title) === title);

  return <PosterEntry elemento={elemento!} />;
}
