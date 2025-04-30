import { ModalContext } from "@/app/providers";
import { FunctionComponent, JSX, useContext } from "react";
import { useAccount } from "wagmi";
import usePurchase from "../hooks/usePurchase";
import Image from "next/legacy/image";
import { INFURA_GATEWAY_INTERNAL, TOKENS } from "@/app/lib/constantes";
import { AiOutlineLoading } from "react-icons/ai";

const Purchase: FunctionComponent<{ dict: any }> = ({ dict }): JSX.Element => {
  const context = useContext(ModalContext);
  const { address } = useAccount();
  const { purchaseLoading, buyDetails, setBuyDetails, handlePurchase } =
    usePurchase(address);
  return (
    <div
      className="inset-0 justify-center fixed z-50 bg-opacity-50 backdrop-blur-sm overflow-y-hidden grid grid-flow-col auto-cols-auto w-full h-auto cursor-pointer items-center justify-center"
      onClick={() => context?.setPurchaseModal(undefined)}
    >
      <div
        className="bg-pink border-black border-4 rounded-md font-pixel w-full sm:w-96 h-fit text-sm flex items-center justify-start p-3 cursor-default flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full sm:w-1/2 py-3 h-fit flex items-center justify-center flex-col gap-4 font-pixel">
          <div className="relative w-full h-40 flex">
            <div>
              <Image
                draggable={false}
                src={`${INFURA_GATEWAY_INTERNAL}${
                  context?.purchaseModal?.uri?.split("ipfs://")?.[1]
                }`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="relative w-fit h-fit flex items-center justify-center">
            <input
              className="relative w-16 h-8 p-1 text-sm text-black focus:outline-none bg-verde rounded-sm"
              placeholder="1"
              type="number"
              disabled={purchaseLoading}
              min={1}
              value={buyDetails?.amount}
              onChange={(e) =>
                !purchaseLoading &&
                setBuyDetails((prev) => ({
                  ...prev,
                  amount: Number(e.target.value),
                }))
              }
            />
          </div>
          <div className="relative w-fit h-fit flex flex-wrap flex-row gap-2 items-center justify-center">
            {TOKENS.map((tok, indice) => {
              return (
                <div
                  key={indice}
                  className={`relative w-fit h-fit flex cursor-pointer ${
                    buyDetails?.currency?.toLowerCase() ==
                      tok?.contract?.toLowerCase() &&
                    "opacity-60 border border-verde rounded-full"
                  } hover:opacity-70`}
                  onClick={() =>
                    !purchaseLoading &&
                    setBuyDetails((prev) => ({
                      ...prev,
                      currency: tok?.contract,
                    }))
                  }
                >
                  <div className="relative flex w-6 h-6">
                    <Image
                      draggable={false}
                      src={`${INFURA_GATEWAY_INTERNAL}${tok?.image}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="relative w-fit h-fit flex text-base">
            {`${
              Number(
                context?.purchaseModal?.prices?.[
                  context?.purchaseModal?.acceptedTokens?.findIndex(
                    (cur) =>
                      cur?.toLowerCase() == buyDetails?.currency?.toLowerCase()
                  )
                ]
              ) /
              10 ** 18
            } ${
              TOKENS?.find(
                (tok) =>
                  tok?.contract?.toLowerCase() ==
                  buyDetails?.currency?.toLowerCase()
              )?.symbol
            }`}
          </div>
          <div className="relative w-fit h-fit flex">
            <div
              className={`relative w-32 bg-black border-2 border-verde h-10 rounded-sm flex items-center justify-center text-center text-pink ${
                !purchaseLoading && "cursor-pointer hover:opacity-70"
              }`}
              onClick={() => !purchaseLoading && handlePurchase()}
            >
              {purchaseLoading ? (
                <AiOutlineLoading
                  className="animate-spin"
                  color="#E725C6"
                  size={15}
                />
              ) : (
                dict?.Home?.purchase
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
