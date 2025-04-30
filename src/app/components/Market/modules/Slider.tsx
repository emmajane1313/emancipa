import { INFURA_GATEWAY_INTERNAL } from "@/app/lib/constantes";
import { chains } from "@lens-chain/sdk/viem";
import { useModal } from "connectkit";
import Image from "next/image";
import { FunctionComponent, JSX } from "react";
import MarqueeText from "react-fast-marquee";
import { useAccount } from "wagmi";

const Slider: FunctionComponent = (): JSX.Element => {
  const { address, isConnected, chainId } = useAccount();
  const { openProfile, openSwitchNetworks, openOnboarding } = useModal();
  return (
    <div className="relative w-full h-fit flex">
      <div className="relative w-full h-16 flex rounded-xl text-black bg-amarillo border-4 border-black">
        <MarqueeText
          gradient={false}
          speed={100}
          direction={"left"}
          pauseOnHover
          className="z-0"
        >
          <div className="relative w-full h-fit text-sm text-black font-pixel uppercase">
            {`.    we will not be banned. women will not stay banned. todos los géneros,
          todos los amores, todas las vidas. no seremos prohibidos. -- زن زندگی
          آزادی -- we will not be banned. women will not stay banned. todos los géneros,
          todos los amores, todas las vidas. no seremos prohibidos. -- زن زندگی
          آزادی -- we will not be banned. women will not stay banned. todos los géneros,
          todos los amores, todas las vidas. no seremos prohibidos. -- زن زندگی
          آزادی -- we will not be banned. women will not stay banned. todos los géneros,
          todos los amores, todas las vidas. no seremos prohibidos. -- زن زندگی
          آزادی -- we will not be banned. women will not stay banned. todos los géneros,
          todos los amores, todas las vidas. no seremos prohibidos. -- زن زندگی
          آزادی -- `}
          </div>
        </MarqueeText>
      </div>
      <div className="absolute right-2 flex w-fit h-fit top-3">
        <div
          className="relative flex w-10 p-1 h-10 cursor-pointer bg-verde border-4 border-black rounded-md"
          onClick={() =>
            isConnected
              ? openProfile?.()
              : chainId !== Number(chains.mainnet)
              ? openSwitchNetworks?.()
              : openOnboarding?.()
          }
        >
          <div className="relative w-full h-full flex">
            <Image
              layout="fill"
              objectFit="contain"
              alt="connect"
              draggable={false}
              src={`${INFURA_GATEWAY_INTERNAL}${
                address && isConnected
                  ? "QmXZEQemA1wK6h7Xymw4qKaPiU7REVM2yyAKcTLfDPeo1e"
                  : "QmeiQQdmaVDeAL9GKXd51uhDdyinRY4FidB5WPrZdR4cyn"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
