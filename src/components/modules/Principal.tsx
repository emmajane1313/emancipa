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
          src={`${INFURA_GATEWAY}/ipfs/QmPzEyn2KM21ZkTyFTZLn7oqahYuUoAz7UNW9fcBDNfzqD`}
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
          src={`${INFURA_GATEWAY}/ipfs/QmfACvMJYvcSJVQ1UucePwk7axutYr35rEPr2j3gkhMMRK`}
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
          width={1035}
          height={1592}
        />
      </div>
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmcfkgsSw5AXDJg3gKJt2ArSBmpRo9LkDtN5jLGdES6VZT`}
          objectFit="contain"
          priority
          width={759}
          height={1886}
        />
      </div>
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmbwcPAd82MD6bZNA85grZngWCTdQn7anDDvwP6tEV4F47`}
          objectFit="contain"
          priority
          width={816}
          height={1456}
        />
      </div>
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmRpq7CBQrhQuxgiy2i36XVzqRVcy8WeQBQW1Ap9B5McXn`}
          objectFit="contain"
          priority
          width={1473}
          height={769}
        />
      </div>
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmTsYZYvc3ZBaSxXRuDywsUyBMUrXipNjBs3ySRBczL3qh`}
          objectFit="contain"
          priority
          width={1807}
          height={943}
        />
      </div>
      
    </div>
  );
};

export default Principal;
