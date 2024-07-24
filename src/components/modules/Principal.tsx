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
      <div className="relative w-full h-fit flex items-start justify-start flex-row">
        {[
          "QmRt6dpmTD7Ps42u3fBH2trJM4giVURGsL8XwwgBJuMUVn",
          "QmeJXfTzbe8qquHW8yrFYSHMtAiMgLcaab6f5qNG6j5bzX",
          "QmVbzcttHWyRzu8ef2tLWkzKhAaoAo2PZwoAy7qyZFxExe",
        ].map((imagen: string, indice: number) => {
          return (
            <div key={indice} className="relative flex w-full h-[30rem]">
              <Image
                src={`${INFURA_GATEWAY}/ipfs/${imagen}`}
                layout="fill"
                objectFit="cover"
                draggable={false}
                priority
              />
            </div>
          );
        })}
      </div>
      <div className="relative w-full h-fit flex items-start justify-start flex-row">
        {[
          "QmdayoVLF4z7F1zufPDusmFbHRSUbvGoZLB7hS9xznSdmR",
          "QmZk7DFZhz9Y2JrfKJmUEpMmk8tfGkeaAHGUjSA1Ysquhh",
          "QmZvRmxFdKE3zvdky62aCK65MXFfEyvfLbX9gG8ivKebiM",
        ].map((imagen: string, indice: number) => {
          return (
            <div key={indice} className="relative flex w-full h-[30rem]">
              <Image
                src={`${INFURA_GATEWAY}/ipfs/${imagen}`}
                layout="fill"
                objectFit="cover"
                draggable={false}
                priority
              />
            </div>
          );
        })}
      </div>
      <div className="relative w-full h-[130rem] flex items-start justify-start ">
        <Image
          layout="fill"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmSscfUkSXxqRPAeC3VURKiiWj5sbfdwSoeDHUiwefjGdF`}
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
};

export default Principal;
