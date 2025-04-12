"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, createConfig, http } from "wagmi";
import { createContext, SetStateAction, useState } from "react";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { Collection } from "./components/Market/types/market.types";
import { chains } from "@lens-chain/sdk/viem";

export const config = createConfig(
  getDefaultConfig({
    appName: "Emancipa",
    walletConnectProjectId: process.env
      .NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string,
    appUrl: "https://emancipa.xyz",
    appIcon: "https://emancipa.xyz/favicon.ico",
    chains: [chains.mainnet],
    transports: {
      [chains.mainnet.id]: http("https://rpc.lens.xyz"),
    },
    ssr: true,
  })
);

const queryClient = new QueryClient();

export const ModalContext = createContext<
  | {
      success: boolean;
      setSuccess: (e: SetStateAction<boolean>) => void;
      error: boolean;
      setError: (e: SetStateAction<boolean>) => void;
      purchaseModal: Collection | undefined;
      setPurchaseModal: (e: SetStateAction<Collection | undefined>) => void;
    }
  | undefined
>(undefined);

export default function Providers({ children }: { children: React.ReactNode }) {
  const [purchaseModal, setPurchaseModal] = useState<Collection | undefined>();
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider
          customTheme={{
            "--ck-font-family": '"Pixel", cursive',
          }}
        >
          <ModalContext.Provider
            value={{
              error,
              setError,
              success,
              setSuccess,
              purchaseModal,
              setPurchaseModal,
            }}
          >
            {children}
          </ModalContext.Provider>
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
