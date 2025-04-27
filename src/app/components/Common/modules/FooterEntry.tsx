"use client";
import {
  PiArrowFatLinesLeftFill,
  PiArrowFatLinesRightFill,
} from "react-icons/pi";
import { usePathname, useRouter } from "next/navigation";

function FooterEntry({ dict }: { dict: any }) {
  const router = useRouter();
  const path = usePathname();

  const changeLanguage = (lang: string) => {
    const segments = path.split("/");
    segments[1] = lang;
    const newPath = segments.join("/");

    document.cookie = `NEXT_LOCALE=${lang}; path=/; SameSite=Lax`;

    router.push(newPath);
  };

  return (
    <div className="relative w-full h-fit flex items-center justify-center gap-3 flex-col mb-0 p-4">
      <div className="relative w-fit h-fit flex items-center justify-center flex-row gap-2">
        <div
          className="relative flex items-center justify-center w-fit h-fit active:scale-95 cursor-pointer"
          onClick={() =>
            path.includes("/es/")
              ? changeLanguage("en")
              : path.includes("/en/")
              ? changeLanguage("pt")
              : path.includes("/pt/")
              ? changeLanguage("ar")
              : path.includes("/ar/")
              ? changeLanguage("fa")
              : path.includes("/fa/")
              ? changeLanguage("uk")
              : path.includes("/uk/")
              ? changeLanguage("he")
              : path.includes("/he/")
              ? changeLanguage("yi")
              : path.includes("/yi/")
              ? changeLanguage("ja")
              : path.includes("/ja/")
              ? changeLanguage("fr")
              : path.includes("/fr/")
              ? changeLanguage("ym")
              : path.includes("/ym/")
              ? changeLanguage("hu")
              : path.includes("/hu/")
              ? changeLanguage("tr")
              : changeLanguage("es")
          }
        >
          <PiArrowFatLinesLeftFill size={10} color={"white"} />
        </div>
        <div className="relative flex items-center justify-center w-fit h-fit flex items-center justify-center font-arana text-white">
          {path.includes("/es/")
            ? "es"
            : path.includes("/he/")
            ? "he"
            : path.includes("/pt/")
            ? "br"
            : path.includes("/ar/")
            ? "ar"
            : path.includes("/fa/")
            ? "fa"
            : path.includes("/uk/")
            ? "uk"
            : path.includes("/yi/")
            ? "yi"
            : path.includes("/fr/")
            ? "fr"
            : path.includes("/ja/")
            ? "ja"
            : path.includes("/hu/")
            ? "hu"
            : path.includes("/tr/")
            ? "tr"
            : path.includes("/ym/")
            ? "ym"
            : "en"}
        </div>
        <div
          className="relative flex items-center justify-center w-fit h-fit active:scale-95 cursor-pointer"
          onClick={() =>
            path.includes("/es/")
              ? changeLanguage("en")
              : path.includes("/en/")
              ? changeLanguage("pt")
              : path.includes("/pt/")
              ? changeLanguage("ar")
              : path.includes("/ar/")
              ? changeLanguage("fa")
              : path.includes("/fa/")
              ? changeLanguage("uk")
              : path.includes("/uk/")
              ? changeLanguage("he")
              : path.includes("/he/")
              ? changeLanguage("yi")
              : path.includes("/yi/")
              ? changeLanguage("ja")
              : path.includes("/ja/")
              ? changeLanguage("fr")
              : path.includes("/fr/")
              ? changeLanguage("ym")
              : path.includes("/ym/")
              ? changeLanguage("hu")
              : path.includes("/hu/")
              ? changeLanguage("tr")
              : changeLanguage("es")
          }
        >
          <PiArrowFatLinesRightFill size={10} color={"white"} />
        </div>
      </div>
      <div
        className={`w-full pt-2 px-2 h-fit flex items-center justify-center font-arana text-white  text-center uppercase break-words ${
          path.includes("/es/") ||
          path.includes("/en/") ||
          path.includes("/pt/") ||
          path.includes("/fr/") ||
          path.includes("/uk/") ||
          path.includes("/ym/") ||
          path.includes("/hu/") ||
          path.includes("/tr/")
            ? "text-[0.5rem]"
            : "text-[1rem]"
        }`}
      >
        {dict.Home.toma}
      </div>
      <div className="relative w-fit h-fit flex font-bit text-center break-all lowercase text-[0.6rem] text-white">
        {dict?.Home?.por + " emma-jane mackinnon-lee"}
      </div>
    </div>
  );
}

export default FooterEntry;
