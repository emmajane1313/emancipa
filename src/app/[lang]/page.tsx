import useTejas from "@/components/hooks/useTejas";
import Footer from "../../components/modules/Footer";
import Principal from "../../components/modules/Principal";
import Tejas from "../../components/modules/Tejas";
import { getDictionary } from "./dictionaries";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  return (
    <div className="relative w-full h-fit flex items-center justify-start flex-col gap-4">
      <Principal />
      <Tejas />
      <Footer dict={dict} />
    </div>
  );
}
