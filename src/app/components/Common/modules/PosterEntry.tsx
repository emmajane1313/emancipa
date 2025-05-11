"use client";

import { FunctionComponent, JSX } from "react";

import Image from "next/image";
import { INFURA_GATEWAY_INTERNAL } from "@/app/lib/constantes";

const PosterEntry: FunctionComponent<{
  elemento: {
    imagen: string;
    title: string;
    anchura: number;
    altura: number;
    alt: string;
    error: string;
  };
}> = ({ elemento }): JSX.Element => {

  return (
    <div
      className="relative w-full h-fit flex gap-20 items-start justify-start flex-col"
      id={"grid"}
    >
      <div
        className={`relative h-fit flex justify-start flex-col w-full items-start`}
      >
        <div className="relative w-full">
          {elemento?.imagen && (
            <Image
              alt={`${elemento?.alt} | Emancipa | Emma-Jane MacKinnon-Lee`}
              layout="responsive"
              draggable={false}
              src={`${INFURA_GATEWAY_INTERNAL}${elemento?.imagen}`}
              objectFit="contain"
              priority
              width={elemento?.anchura}
              height={elemento?.altura}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PosterEntry;
