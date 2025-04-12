"use client";
import {
  PiArrowFatLinesLeftFill,
  PiArrowFatLinesRightFill,
} from "react-icons/pi";
import { usePathname, useRouter } from "next/navigation";

function FooterEntry({ dict }: { dict: any }) {
  const router = useRouter();
  const path = usePathname();
  return (
    <div className="relative w-full h-fit flex items-center justify-center gap-3 flex-col mb-0 p-4">
      <div className="relative w-fit h-fit flex items-center justify-center flex-row gap-2">
        <div
          className="relative flex items-center justify-center w-fit h-fit active:scale-95 cursor-pointer"
          onClick={() =>
            router.push(
              path.includes("/es/")
                ? path.replace("/es/", "/en/")
                : path.includes("/en/")
                ? path.replace("/en/", "/pt/")
                : path.includes("/pt/")
                ? path.replace("/pt/", "/ar/")
                : path.includes("/ar/")
                ? path.replace("/ar/", "/fa/")
                : path.includes("/fa/")
                ? path.replace("/fa/", "/uk/")
                : path.includes("/uk/")
                ? path.replace("/uk/", "/he/")
                : path.includes("/he/")
                ? path.replace("/he/", "/yi/")
                : path.includes("/yi/")
                ? path.replace("/yi/", "/ja/")
                : path.includes("/ja/")
                ? path.replace("/ja/", "/fr/")
                : path.includes("/fr/")
                ? path.replace("/fr/", "/ym/")
                : path.includes("/ym/")
                ? path.replace("/ym/", "/hu/")
                : path.includes("/hu/")
                ? path.replace("/hu/", "/tr/")
                : path.replace("/tr/", "/es/")
            )
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
            router.push(
              path.includes("/es/")
                ? path.replace("/es/", "/en/")
                : path.includes("/en/")
                ? path.replace("/en/", "/pt/")
                : path.includes("/pt/")
                ? path.replace("/pt/", "/ar/")
                : path.includes("/ar/")
                ? path.replace("/ar/", "/fa/")
                : path.includes("/fa/")
                ? path.replace("/fa/", "/uk/")
                : path.includes("/uk/")
                ? path.replace("/uk/", "/he/")
                : path.includes("/he/")
                ? path.replace("/he/", "/yi/")
                : path.includes("/yi/")
                ? path.replace("/yi/", "/ja/")
                : path.includes("/ja/")
                ? path.replace("/ja/", "/fr/")
                : path.includes("/fr/")
                ? path.replace("/fr/", "/ym/")
                : path.includes("/ym/")
                ? path.replace("/ym/", "/hu/")
                : path.includes("/hu/")
                ? path.replace("/hu/", "/tr/")
                : path.replace("/tr/", "/es/")
            )
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
