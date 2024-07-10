import Footer from "../components/modules/Footer";
import Principal from "../components/modules/Principal";
import Tejas from "../components/modules/Tejas";
import { getDictionary } from "../app/dictionaries";

export default function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = getDictionary(lang);
  return (
    <div className="relative w-full h-fit flex items-center justify-start flex-col gap-4">
      <Principal />
      <Tejas />
      <Footer />
    </div>
  );
}
