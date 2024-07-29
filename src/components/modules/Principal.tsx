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
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmbGj4FTFuwLsB5RKseKVqWCvTc1AUc3YSi49TD4yWtrnH`}
          objectFit="contain"
          priority
          width={1472}
          height={824}
        />
      </div>
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmYUgZKL6RqpsLnbxdd8CazVcNJE8KV73cGenzit6BcTzb`}
          objectFit="contain"
          priority
          width={817}
          height={1457}
        />
      </div>
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmXSzv2WkgjzDbXUymnVkqeK45QKVNdSUhh5gX9yLspjFw`}
          objectFit="contain"
          priority
          width={754}
          height={1330}
        />
      </div>
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmSgDkJADYRxtBGwVqe6krkQKez6UoCvEmGDVLwFrksxPn`}
          objectFit="contain"
          priority
          width={810}
          height={1970}
        />
      </div>
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmbPNx8mPKKPwt7YaDFZ9PUhag4g9eSP9wFNs4aCvEcFmj`}
          objectFit="contain"
          priority
          width={945}
          height={1473}
        />
      </div>
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmVE7pDrbBpB95bc8u3XaWEoLbzDbvtR7CRSKNFq3E2BeA`}
          objectFit="contain"
          priority
          width={1112}
          height={1440}
        />
      </div>
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmbVKUSF2xLCfTd4fXVXw3SSX8hbxHBr6mP1YTUzPuaUQV`}
          objectFit="contain"
          priority
          width={1869}
          height={1289}
        />
      </div>
      <div className="relative w-full h-fit flex items-start justify-start flex-row">
        {[
          "QmZS9LSB2L8vVULaZRGzEiXijdAMcFwHUzdfgMZxYnQam7",
          "QmRthdHrbf2wBbV1huVqCAiAbCMmKJrYLqfNF6NEtfhpUi",
          "QmVLmhzPcesBtbKERM5yGcZC6jZ4UgbLSWdDvE5DHLTKLJ",
        ].map((imagen: string, indice: number) => {
          return (
            <div key={indice} className="relative w-full">
              <Image
                src={`${INFURA_GATEWAY}/ipfs/${imagen}`}
                draggable={false}
                layout="responsive"
                objectFit="contain"
                priority
                width={922}
                height={794}
              />
            </div>
          );
        })}
      </div>
      <div className="relative w-full h-fit flex items-start justify-start flex-row">
        {[
          "QmeXfAbhtx8jxA2RfP7d4XBdDvoR48ot2mXjiPQzQW6CAt",
          "QmWPdbKx7bfxYQSjFRceLnQz1utuhBGHD7pNb2QgRrP6cc",
          "Qmf65wCaJqUsFB44itaqHDikFtR9nBqNt8UJ7rr76UiRL8",
        ].map((imagen: string, indice: number) => {
          return (
            <div key={indice} className="relative w-full">
              <Image
                src={`${INFURA_GATEWAY}/ipfs/${imagen}`}
                draggable={false}
                layout="responsive"
                objectFit="contain"
                priority
                width={922}
                height={794}
              />
            </div>
          );
        })}
      </div>
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmfXPtT1DZiHfCRhTcFaM94JzgFqP3GYFchfvePajSZ2td`}
          objectFit="contain"
          priority
          width={858}
          height={1282}
        />
      </div>
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmPv1dUj5iT459mc4ADmTJRH8W8QDvtUUPWLqLmWwzhY4f`}
          objectFit="contain"
          priority
          width={1213}
          height={1472}
        />
      </div>
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmaYPJRX1Dtose4njdsJ6vVgEfLHBydGWMvhonxUNVmwBe`}
          objectFit="contain"
          priority
          width={1456}
          height={816}
        />
      </div>
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmVwmNVU7WLz1bC1umLtTcyYoGBgDMBij3dVXu2GGSVFA3`}
          objectFit="contain"
          priority
          width={816}
          height={1192}
        />
      </div>
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmaJZUQNBcMwrCsTpXR6HtC1gmgHvL34fUkbJuwzpBC2CE`}
          objectFit="contain"
          priority
          width={737}
          height={977}
        />
      </div>
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmPbVz7oeNx2yL8Q436GSq3tXftR1Jc1fAAdmPv5pobLxy`}
          objectFit="contain"
          priority
          width={817}
          height={1457}
        />
      </div>
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmWAnqcp9ayYvb5NBPefpBrYa2fJWvyyZKdBZPZiUqQdby`}
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
          src={`${INFURA_GATEWAY}/ipfs/QmXVWGfMA4w6M5c9BVUdEy6MCa2X5eXoPgX2vvth6dz2vX`}
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
          src={`${INFURA_GATEWAY}/ipfs/QmRnjm5s4epfV6ryZGm4C7GgRPBB8Qc5qewgkkhgU6MACS`}
          objectFit="contain"
          priority
          width={1111}
          height={1260}
        />
      </div>
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmXU1xLCg2A1MWn4Z2HGVpd2Eww216D3dNrnyWvMTeuK8A`}
          objectFit="contain"
          priority
          width={849}
          height={985}
        />
      </div>
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmZSS9ywhbUyZdZyQN9pm57PEzujG2LJXTrjqqnBtMy4mn`}
          objectFit="contain"
          priority
          width={817}
          height={1458}
        />
      </div>
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmZrJZiu2DLHYc2rFRgdSS3Dj4ooyARmwbxStU4hmZUrDS`}
          objectFit="contain"
          priority
          width={1457}
          height={817}
        />
      </div>
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmWurCyCPYjLsVCwPVDEr8X6dtR5CpGK4tAdADbDfTo98u`}
          objectFit="contain"
          priority
          width={561}
          height={793}
        />
      </div>
      <div className="relative w-full">
        <Image
          layout="responsive"
          draggable={false}
          src={`${INFURA_GATEWAY}/ipfs/QmeVWZWCBu1ESULm6mFv5uWoavEvgdYJ3HArRDT6GHi2oG`}
          objectFit="contain"
          priority
          width={1225}
          height={1233}
        />
      </div>
    </div>
  );
};

export default Principal;
