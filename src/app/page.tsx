import { Suspense } from "react";
import { getDictionary } from "./[lang]/dictionaries";
import Entry from "./components/Common/modules/Entry";
import Wrapper from "./components/Common/modules/Wrapper";
import { LOCALES } from "./lib/constantes";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => ({
  alternates: {
    canonical: "https://emancipa.xyz/",
    languages: LOCALES.reduce((acc, item) => {
      acc[item] = `https://emancipa.xyz/${item}/`;
      return acc;
    }, {} as { [key: string]: string }),
  },
});

export default async function Home() {
  const dict = await (getDictionary as (locale: any) => Promise<any>)("en");
  return (
    <Wrapper
      dict={dict}
      page={
        <Suspense fallback={<></>}>
          <Entry dict={dict} />
        </Suspense>
      }
    />
  );
}
