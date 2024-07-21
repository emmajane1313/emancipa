"use client";
import Image from "next/legacy/image";
import {
  PiArrowFatLinesLeftFill,
  PiArrowFatLinesRightFill,
} from "react-icons/pi";
import { usePathname, useRouter } from "next/navigation";
import { INFURA_GATEWAY } from "@/lib/constantos";
import { Dictionary } from "../tipos/emancipa.types";

function Footer({ dict }: { dict: Dictionary }) {
  const router = useRouter();
  const path = usePathname();
  return (
    <div className="relative w-full h-fit flex items-center justify-center gap-10 flex-col mb-0 p-4">
      <div className="relative w-fit h-fit flex items-center justify-center flex-row gap-2">
        <div
          className="relative flex items-center justify-center w-fit h-fit active:scale-95 cursor-pointer"
          onClick={() =>
            router.push(
              path.includes("/en/")
                ? path.replace("/en/", "/es/")
                : path.replace("/es/", "/en/")
            )
          }
        >
          <PiArrowFatLinesLeftFill size={15} color={"white"} />
        </div>
        <div className="relative flex items-center justify-center w-10 h-9">
          <Image
            draggable={false}
            layout="fill"
            src={`${INFURA_GATEWAY}/ipfs/${
              path.includes("/en/")
                ? "QmWDGpLPFi3cejfF3uBdFfjE9v2yeyFRShn5DQhiKXgDdo"
                : "QmNTNfAqo6v4T1fQc8YVPAnKmLTVdyripzBYyLc6HXMSEA"
            }`}
          />
        </div>
        <div
          className="relative flex items-center justify-center w-fit h-fit active:scale-95 cursor-pointer"
          onClick={() =>
            router.push(
              path.includes("/en/")
                ? path.replace("/en/", "/es/")
                : path.replace("/es/", "/en/")
            )
          }
        >
          <PiArrowFatLinesRightFill size={15} color={"white"} />
        </div>
      </div>
      <div className="relative w-fit h-fit flex flex-col gap-2 items-center justify-center mr-0">
        <div className="w-fit h-fit flex items-center justify-center font-arana text-black text-xs text-center uppercase">
          {dict.Nav.guerrera}
        </div>
        <div className="relative w-fit h-fit items-center justify-center flex flex-wrap gap-3">
          {[
            {
              image: "QmRvJQiQaeExbGds6SZDcv2Tz7sVF71NW3UKMuDTzYb3QJ",
              link: "https://f3manifesto.xyz/",
              title: "F3Manifesto",
              width: 100,
              height: 100
            },
            {
              image: "QmWgnkX1rn8EWX8tg2dYzbisLxecJifNvsFHyGkrgjKSvN",
              link: "https://digitalax.xyz/",
              title: "Digitalax",
              width: 40,
              height: 40
            },
            {
              image: "QmaNMrJo7TqEpvsveTFJk7zwBbS4SukM3gnuVwhiY5sCoa",
              link: "https://npcstudio.xyz/",
              title: "NPC Studio",
              width: 45,
              height: 50
            },
          ].map(
            (
              item: {
                image: string;
                title: string;
                link: string;
                width: number;
                height: number
              },
              index: number
            ) => {
              return (
                <div
                  key={index}
                  className="relative flex items-center justify-center cursor-pointer active:scale-95 w-8 bg-white border border-black rounded-full p-2 h-8"
                  onClick={() => window.open(item.link)}
                  title={item.title}
                >
                  <div className="relative flex w-fit h-fit items-center justify-center">
                    <Image
                      src={`${INFURA_GATEWAY}/ipfs/${item.image}`}
                      // layout="fill"
                      objectFit="contain"
                      draggable={false}
                      width={item.width}
                      height={item.height}
                    />
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default Footer;
