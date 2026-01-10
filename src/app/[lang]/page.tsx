import Entry from "../components/Common/modules/Entry";
import { tParams } from "./[...notFound]/page";
import { getDictionary } from "./dictionaries";
import { Metadata } from "next";
import { LOCALES } from "../lib/constantes";

export const generateMetadata = async ({
  params,
}: {
  params: tParams;
}): Promise<Metadata> => {
  const { lang } = await params;

  return {
    alternates: {
      canonical: `https://emancipa.xyz/${lang}/`,
      languages: LOCALES.reduce((acc, item) => {
        acc[item] = `https://emancipa.xyz/${item}/`;
        return acc;
      }, {} as { [key: string]: string }),
    },
  };
};

export default async function Home({ params }: { params: tParams }) {
  const { lang } = await params;
  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <Entry dict={dict} />;
}

