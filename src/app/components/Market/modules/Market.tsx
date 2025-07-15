"use client";

import { FunctionComponent, JSX, useContext } from "react";
import Slider from "./Slider";
import Image from "next/image";
import { IMAGE_SET, INFURA_GATEWAY_INTERNAL } from "@/app/lib/constantes";
import useMercado from "../hooks/useMercado";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAccount } from "wagmi";
import { Collection, Order } from "../types/market.types";
import { ModalContext } from "@/app/providers";

const Market: FunctionComponent = (): JSX.Element => {
  const { address, isConnected } = useAccount();
  const context = useContext(ModalContext);
  const {
    cargando,
    nfts,
    handleMoreNFTs,
    hasMore,
    moreCargando,
    nftsCollected,
    hasMoreCollected,
    handleMoreNFTsCollected,
    cargandoCollected,
    moreCargandoCollected,
  } = useMercado(address);
  return (
    <div className="p-1 sm:p-3 relative w-full max-h-screen min-h-screen flex bg-morado flex-col gap-6 items-start justify-start">
      <Slider />
      {address && isConnected && (
        <div className="relative w-full h-full flex">
          <div className="relative w-full h-fit flex items-start justify-center">
            <div className="relative w-full h-fit overflow-x-scroll items-start justify-start">
              <InfiniteScroll
                dataLength={nftsCollected?.length || 1}
                next={handleMoreNFTsCollected}
                hasMore={hasMoreCollected.more}
                loader={<div key={0} />}
                className="relative flex flex-row gap-4 h-fit items-start justify-start w-full"
              >
                {cargandoCollected || nftsCollected?.length < 1
                  ? Array.from({ length: 30 }).map((_, indice) => {
                      return (
                        <div
                          key={indice}
                          className={`relative w-fit h-fit p-px flex border border-black animate-pulse`}
                          style={{
                            backgroundColor:
                              indice % 3
                                ? "#E725C6"
                                : indice % 4
                                ? "#F4C902"
                                : "#1ED922",
                          }}
                        >
                          <div className="relative flex w-10 h-10 bg-black"></div>
                        </div>
                      );
                    })
                  : (moreCargandoCollected
                      ? [...nftsCollected, ...Array.from({ length: 10 })]
                      : nftsCollected
                    )?.map((nft, indice) => {
                      return (
                        <>
                          {(nft as Order)?.collection ? (
                            <div
                              key={indice}
                              className={`relative w-fit h-fit p-px flex border border-black cursor-pointer`}
                              style={{
                                backgroundColor:
                                  indice % 3
                                    ? "#E725C6"
                                    : indice % 4
                                    ? "#F4C902"
                                    : "#1ED922",
                              }}
                              onClick={() =>
                                window.open(
                                  `https://explorer.lens.xyz/tx/${
                                    (nft as Order)?.transactionHash
                                  }`
                                )
                              }
                            >
                              <div className="relative w-10 h-10 flex bg-black">
                                <div className="relative w-full h-full flex">
                                  <Image
                                    draggable={false}
                                    layout="fill"
                                    objectFit="cover"
                                    alt={`Order | Emancipa | Emma-Jane MacKinnon-Lee`}
                                    src={`${INFURA_GATEWAY_INTERNAL}${
                                      (nft as Order)?.collection?.uri?.split(
                                        "ipfs://"
                                      )?.[1]
                                    }`}
                                  />
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div
                              key={indice}
                              className={`relative w-fit h-fit p-px flex border border-black animate-pulse`}
                              style={{
                                backgroundColor:
                                  indice % 3
                                    ? "#E725C6"
                                    : indice % 4
                                    ? "#F4C902"
                                    : "#1ED922",
                              }}
                            >
                              <div className="relative flex w-10 h-10 bg-black"></div>
                            </div>
                          )}
                        </>
                      );
                    })}
              </InfiniteScroll>
            </div>
          </div>
        </div>
      )}
      <div className="relative w-full h-full flex overflow-y-scroll">
        <div className="relative w-full h-fit flex items-start justify-center">
          <div
            className="relative w-fit h-[calc(100vh+10rem)] overflow-y-scroll items-center justify-center pb-32"
            id="parent"
          >
            <InfiniteScroll
              dataLength={nfts?.length || 1}
              next={handleMoreNFTs}
              scrollableTarget="parent"
              hasMore={hasMore.more}
              loader={<div key={0} />}
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 xl:w-max h-fit pb-10 items-center justify-center xl:w-auto w-full"
            >
              {cargando || nfts?.length < 1
                ? Array.from({ length: 30 }).map((_, indice) => {
                    return (
                      <div
                        key={indice}
                        className={`animate-pulse relative w-fit h-fit p-3 flex border-4 border-black`}
                        style={{
                          backgroundColor:
                            indice % 3
                              ? "#E725C6"
                              : indice % 4
                              ? "#F4C902"
                              : "#1ED922",
                        }}
                      >
                        <div className="relative flex w-40 sm:w-60 h-40 sm:h-60 bg-black"></div>
                      </div>
                    );
                  })
                : (moreCargando
                    ? [...nfts, ...Array.from({ length: 10 })]
                    : nfts
                  )?.map((nft, indice) => {
                    return (
                      <>
                        {(nft as Collection)?.prices ? (
                          <div
                            key={indice}
                            className={`relative w-fit h-fit p-3 flex border-4 border-black cursor-pointer`}
                            style={{
                              backgroundColor:
                                indice % 3
                                  ? "#E725C6"
                                  : indice % 4
                                  ? "#F4C902"
                                  : "#1ED922",
                            }}
                            onClick={() =>
                              context?.setPurchaseModal(nft as Collection)
                            }
                          >
                            <div className="relative flex w-40 sm:w-60 h-40 sm:h-60 bg-black">
                              <div className="relative w-full h-full flex">
                                <Image
                                  draggable={false}
                                  layout="fill"
                                  alt={`${IMAGE_SET[indice]?.alt} | Emancipa | Emma-Jane MacKinnon-Lee`}
                                  objectFit="cover"
                                  src={`${INFURA_GATEWAY_INTERNAL}${
                                    (nft as Collection)?.uri?.split(
                                      "ipfs://"
                                    )?.[1]
                                  }`}
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div
                            key={indice}
                            className={`animate-pulse relative w-fit h-fit p-3 flex border-4 border-black`}
                            style={{
                              backgroundColor:
                                indice % 3
                                  ? "#E725C6"
                                  : indice % 4
                                  ? "#F4C902"
                                  : "#1ED922",
                            }}
                          >
                            <div className="relative flex w-40 sm:w-60 h-40 sm:h-60 bg-black"></div>
                          </div>
                        )}
                      </>
                    );
                  })}
            </InfiniteScroll>
          </div>
        </div>
      </div>
      <div className="absolute left-10 top-28 flex w-fit h-fit">
        <div className="relative w-10 sm:w-32 h-8 sm:h-20 flex -rotate-20">
          <Image
            draggable={false}
            src={`${INFURA_GATEWAY_INTERNAL}QmdT89cL9KxYNbPYR6qLbR5zWoho7va1aTWbhvxBCpZzLf`}
            layout="fill"
            objectFit="contain"
            alt="Emancipa | Emma-Jane MacKinnon-Lee"
          />
        </div>
      </div>
      <div className="absolute right-4 bottom-44 flex w-fit h-fit">
        <div
          className="relative cursor-pointer w-10 sm:w-32 h-8 sm:h-20 flex -rotate-20"
          onClick={() =>
            window.open("https://emmajanemackinnonlee-runway.com/")
          }
        >
          <Image
            draggable={false}
            src={`${INFURA_GATEWAY_INTERNAL}QmY7a3SW8ygnh2XD4bHh73wBrYhHNhrUJRj5J5sx3jK9zn`}
            layout="fill"
            objectFit="contain"
            alt="Emancipa | Emma-Jane MacKinnon-Lee"
          />
        </div>
      </div>
      <div className="absolute right-10 bottom-28 flex w-fit h-fit">
        <div className="relative w-10 sm:w-32 h-8 sm:h-20 flex rotate-12">
          <Image
            alt="Emancipa | Emma-Jane MacKinnon-Lee"
            draggable={false}
            src={`${INFURA_GATEWAY_INTERNAL}QmfUjMSf1YbcY3RKWDJUAxXdTTPSRfm3atYz2MzNhNY8uV`}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="absolute w-full h-fit left-0 bottom-0 flex">
        <div className="relative w-full h-14 sm:h-32 flex">
          <Image
            draggable={false}
            alt="Emancipa | Emma-Jane MacKinnon-Lee"
            src={`${INFURA_GATEWAY_INTERNAL}QmV9mjDq5Qbjba2ja9m12M2NeuNKEXuDE5VKaPVsb148Jb`}
            layout="fill"
            priority
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Market;
