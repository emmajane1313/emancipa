"use client";
import { INFURA_GATEWAY } from "@/lib/constantos";
import Image from "next/legacy/image";
import { FunctionComponent } from "react";

const Principal: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-fit flex items-start justify-start bg-black flex-col">
      <div className="relative w-full h-[150rem] flex items-start justify-start ">
        <Image
          layout="fill"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmNrybajbY5LhWDTLsAk86PWgigHKdu8DdSoX8RmbbAq75`}
          objectFit="cover"
          priority
        />
      </div>
      <div className="relative w-full h-[200rem] flex items-start justify-start ">
        <Image
          layout="fill"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmUyn9D92yEjz4ES7GyYAoBz7jgCUcFwQTxXmJmJeBNEwk`}
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
};

export default Principal;
