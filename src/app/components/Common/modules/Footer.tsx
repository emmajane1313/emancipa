import FooterEntry from "./FooterEntry";
import { getDictionary } from "@/app/[lang]/dictionaries";

export type tParams = Promise<{ lang: string }>;

export default async function Footer({ params }: { params: tParams }) {
  const { lang } = await params;

  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <FooterEntry dict={dict} />;
}
