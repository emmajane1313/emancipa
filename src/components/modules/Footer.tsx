"use client";
import {
  PiArrowFatLinesLeftFill,
  PiArrowFatLinesRightFill,
} from "react-icons/pi";
import { usePathname, useRouter } from "next/navigation";
import { Dictionary } from "../tipos/emancipa.types";

function Footer({ dict }: { dict: Dictionary }) {
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
                : path.replace("/he/", "/es/")
            )
          }
        >
          <PiArrowFatLinesLeftFill size={10} color={"white"} />
        </div>
        <div className="relative flex items-center justify-center w-fit h-fit flex items-center justify-center font-arana text-white">
          {path.includes("/es/")
            ? "es"
            : path.includes("/en/")
            ? "en"
            : path.includes("/pt/")
            ? "br"
            : path.includes("/ar/")
            ? "ar"
            : path.includes("/fa/")
            ? "fa"
            : path.includes("/uk/")
            ? "uk"
            : "he"}
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
                : path.replace("/he/", "/es/")
            )
          }
        >
          <PiArrowFatLinesRightFill size={10} color={"white"} />
        </div>
      </div>
      <div
        className={`w-full p-2 h-fit flex items-center justify-center font-arana text-white  text-center uppercase break-words ${
          path.includes("/es/") ||
          path.includes("/en/") ||
          path.includes("/pt/")
            ? "text-[0.5rem]"
            : "text-[1rem]"
        }`}
      >
        {dict.Home.toma}
      </div>
    </div>
  );
}

export default Footer;
