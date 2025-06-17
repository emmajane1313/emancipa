"use client";

import Link from "next/link";

export default function NotFoundEntry({
  dict,
  lang,
}: {
  dict: any;
  lang: string;
}) {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-center text-2xl font-arana text-white break-words">
      <Link
        className="cursor-pointer w-fit h-fit flex items-center justify-center"
        href="/"
        dir={
          [
            "en",
            "es",
            "fr",
            "pt",
            "gd",
            "hu",
            "ja",
            "tr",
            "ym",
            "uk",
          ]?.includes(lang)
            ? "ltr"
            : "rtl"
        }
      >
        {dict?.[404]?.nada}
      </Link>
    </div>
  );
}
