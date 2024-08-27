import Footer from "../../components/modules/Footer";
import Principal from "../../components/modules/Principal";
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
      <Footer dict={dict} />
    </div>
  );
}
