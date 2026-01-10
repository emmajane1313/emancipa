import { INFURA_GATEWAY_INTERNAL } from "@/app/lib/constantes";
import Image from "next/image";
import { FunctionComponent, JSX } from "react";
import usePrincipal from "../hooks/usePrincipal";
import { useRouter } from "next/navigation";
import Social from "./Social";
import { cleanTitle } from "@/app/lib/helpers/cleanTitle";
import { useSeasons } from "../hooks/useSeasons";
import { SeasonSelector } from "./SeasonSelector";

const Principal: FunctionComponent<{ dict?: any }> = ({ dict }): JSX.Element => {
  const { full, setFull } = usePrincipal();
  const router = useRouter();
  const { selectedSeason, allSeasons, changeSeason } = useSeasons();
  const IMAGE_SET = selectedSeason.imageSet;
  return (
    <div
      className="relative w-full h-fit flex gap-20 items-start justify-start flex-col pt-10"
      id={"grid"}
    >
      <div className="sticky z-10 px-2 sm:px-4 w-full h-fit flex items-end justify-between">
        <SeasonSelector
          seasons={allSeasons}
          selectedSeason={selectedSeason}
          onSeasonChange={changeSeason}
          dict={dict}
        />
        <div className="relative w-fit h-fit flex">
          <div
            className="relative flex w-20 h-12 rounded-md border-4 border-morado bg-black items-center p-2 justify-center cursor-pointer"
            onClick={() => setFull(!full)}
          >
            <div className="relative w-full h-full flex">
              <Image
                draggable={false}
                alt="Emancipa | Emma-Jane MacKinnon-Lee"
                src={`${INFURA_GATEWAY_INTERNAL}${
                  full
                    ? "QmaYx9Hm5S74N7Q4RLfMBn6JBnhd4YC3XEaTAE6ZiTQZFr"
                    : "QmQDtHLcRMYKiBVFN4V3oM4ZwUAJDwCh7Kf6jjVqDtSPa9"
                }`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`relative h-fit flex justify-start flex-col w-full items-center`}
      >
        <div
          className={`relative h-fit flex justify-start flex-col ${
            full
              ? "w-full items-start"
              : "w-1/3 items-center border-8 border-amarillo"
          }`}
        >
          {IMAGE_SET.slice(0, 2).map((elemento, indice) => {
            return (
              <div
                key={indice}
                className="relative w-full cursor-pointer"
                onClick={() =>
                  router.push(`/poster/${cleanTitle(elemento?.title)}`)
                }
              >
                <Image
                  alt={`${elemento.alt} | Emancipa | Emma-Jane MacKinnon-Lee`}
                  layout="responsive"
                  draggable={false}
                  src={`${INFURA_GATEWAY_INTERNAL}${elemento.imagen}`}
                  objectFit="contain"
                  priority
                  width={elemento.anchura}
                  height={elemento.altura}
                />
                {Number(elemento?.socials?.length) > 0 && (
                  <Social socials={elemento?.socials!} />
                )}
              </div>
            );
          })}
          <div className="relative w-full h-fit flex items-start justify-start flex-row">
            {IMAGE_SET.slice(2, 5).map((imagen, indice: number) => {
              return (
                <div
                  key={indice}
                  className="relative w-full cursor-pointer"
                  onClick={() =>
                    router.push(`/poster/${cleanTitle(imagen?.title)}`)
                  }
                >
                  <Image
                    src={`${INFURA_GATEWAY_INTERNAL}${imagen.imagen}`}
                    draggable={false}
                    layout="responsive"
                    objectFit="contain"
                    priority
                    alt={`${imagen.alt} | Emancipa | Emma-Jane MacKinnon-Lee`}
                    width={imagen.anchura}
                    height={imagen.altura}
                  />
                  {Number(imagen?.socials?.length) > 0 && (
                    <Social socials={imagen?.socials!} />
                  )}
                </div>
              );
            })}
          </div>
          <div className="relative w-full h-fit flex items-start justify-start flex-row">
            {IMAGE_SET.slice(5, 8).map((imagen, indice: number) => {
              return (
                <div
                  key={indice}
                  className="relative w-full cursor-pointer"
                  onClick={() =>
                    router.push(`/poster/${cleanTitle(imagen?.title)}`)
                  }
                >
                  <Image
                    src={`${INFURA_GATEWAY_INTERNAL}${imagen.imagen}`}
                    draggable={false}
                    layout="responsive"
                    objectFit="contain"
                    priority
                    alt={`${imagen.alt} | Emancipa | Emma-Jane MacKinnon-Lee`}
                    width={imagen.anchura}
                    height={imagen.altura}
                  />
                  {Number(imagen?.socials?.length) > 0 && (
                    <Social socials={imagen?.socials!} />
                  )}
                </div>
              );
            })}
          </div>
          {IMAGE_SET.slice(8, 22).map((elemento, indice) => {
            return (
              <div
                key={indice}
                className="relative w-full cursor-pointer"
                onClick={() =>
                  router.push(`/poster/${cleanTitle(elemento?.title)}`)
                }
              >
                <Image
                  layout="responsive"
                  draggable={false}
                  src={`${INFURA_GATEWAY_INTERNAL}${elemento.imagen}`}
                  objectFit="contain"
                  priority
                  alt={`${elemento.alt} | Emancipa | Emma-Jane MacKinnon-Lee`}
                  width={elemento.anchura}
                  height={elemento.altura}
                />
                {Number(elemento?.socials?.length) > 0 && (
                  <Social socials={elemento?.socials!} />
                )}
              </div>
            );
          })}
          <div className="relative w-full h-fit flex items-start justify-start flex-row">
            {IMAGE_SET.slice(22, 25).map((imagen, indice: number) => {
              return (
                <div
                  key={indice}
                  className="relative w-full cursor-pointer"
                  onClick={() =>
                    router.push(`/poster/${cleanTitle(imagen?.title)}`)
                  }
                >
                  <Image
                    src={`${INFURA_GATEWAY_INTERNAL}${imagen.imagen}`}
                    draggable={false}
                    layout="responsive"
                    objectFit="contain"
                    priority
                    width={imagen.anchura}
                    alt={`${imagen.alt} | Emancipa | Emma-Jane MacKinnon-Lee`}
                    height={imagen.altura}
                  />
                  {Number(imagen?.socials?.length) > 0 && (
                    <Social socials={imagen?.socials!} />
                  )}
                </div>
              );
            })}
          </div>
          <div className="relative w-full h-fit flex items-start justify-start flex-row">
            {IMAGE_SET.slice(25, 28).map((imagen, indice: number) => {
              return (
                <div
                  key={indice}
                  className="relative w-full cursor-pointer"
                  onClick={() =>
                    router.push(`/poster/${cleanTitle(imagen?.title)}`)
                  }
                >
                  <Image
                    alt={`${imagen.alt} | Emancipa | Emma-Jane MacKinnon-Lee`}
                    src={`${INFURA_GATEWAY_INTERNAL}${imagen.imagen}`}
                    draggable={false}
                    layout="responsive"
                    objectFit="contain"
                    priority
                    width={imagen.anchura}
                    height={imagen.altura}
                  />
                  {Number(imagen?.socials?.length) > 0 && (
                    <Social socials={imagen?.socials!} />
                  )}
                </div>
              );
            })}
          </div>
          {IMAGE_SET.slice(28).map((elemento, indice) => {
            return (
              <div
                key={indice}
                className="relative w-full cursor-pointer"
                onClick={() =>
                  router.push(`/poster/${cleanTitle(elemento?.title)}`)
                }
              >
                <Image
                  layout="responsive"
                  draggable={false}
                  src={`${INFURA_GATEWAY_INTERNAL}${elemento.imagen}`}
                  objectFit="contain"
                  priority
                  alt={`${elemento.alt} | Emancipa | Emma-Jane MacKinnon-Lee`}
                  width={elemento.anchura}
                  height={elemento.altura}
                />
                {Number(elemento?.socials?.length) > 0 && (
                  <Social socials={elemento?.socials!} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Principal;
