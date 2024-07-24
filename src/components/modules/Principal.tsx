"use client";
import { INFURA_GATEWAY } from "@/lib/constantos";
import Image from "next/legacy/image";
import { FunctionComponent } from "react";

const Principal: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-fit flex items-start justify-start bg-black flex-col">
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmNrybajbY5LhWDTLsAk86PWgigHKdu8DdSoX8RmbbAq75`}
          objectFit="contain"
          priority
          width={3038}
          height={4696}
        />
      </div>
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmUyn9D92yEjz4ES7GyYAoBz7jgCUcFwQTxXmJmJeBNEwk`}
          objectFit="contain"
          priority
          width={2698}
          height={5503}
        />
      </div>
      <div className="relative w-full h-fit flex items-start justify-start flex-row">
        {[
          "QmRt6dpmTD7Ps42u3fBH2trJM4giVURGsL8XwwgBJuMUVn",
          "QmeJXfTzbe8qquHW8yrFYSHMtAiMgLcaab6f5qNG6j5bzX",
          "QmVbzcttHWyRzu8ef2tLWkzKhAaoAo2PZwoAy7qyZFxExe",
        ].map((imagen: string, indice: number) => {
          return (
            <div key={indice} className="relative w-full">
              <Image
                src={`${INFURA_GATEWAY}/ipfs/${imagen}`}
                draggable={false}
                layout="responsive"
                objectFit="contain"
                priority
                width={1025}
                height={1025}
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
            <div key={indice} className="relative w-full">
              <Image
                src={`${INFURA_GATEWAY}/ipfs/${imagen}`}
                draggable={false}
                layout="responsive"
                objectFit="contain"
                priority
                width={1025}
                height={1025}
              />
            </div>
          );
        })}
      </div>
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmNNS4wKZaXggt9K4Ww6RKzTpjHJLxS7Vr5LmNA5akeTJ1`}
          objectFit="contain"
          priority
          width={896}
          height={1360}
        />
      </div>
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmSscfUkSXxqRPAeC3VURKiiWj5sbfdwSoeDHUiwefjGdF`}
          objectFit="contain"
          priority
          width={960}
          height={1344}
        />
      </div>
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmWavSbkzSVBBGdKwZBCUZ1WpTvgnxctXfULkiJ86F2QxU`}
          objectFit="contain"
          priority
          width={896}
          height={1360}
        />
      </div>
    </div>
  );
};

export default Principal;
