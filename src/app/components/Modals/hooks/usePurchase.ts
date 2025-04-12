import { EMANCIPA_MARKET } from "@/app/lib/constantes";
import { ModalContext } from "@/app/providers";
import { chains } from "@lens-chain/sdk/viem";
import { useContext, useEffect, useState } from "react";
import { createPublicClient, createWalletClient, custom, http } from "viem";
import EmancipaMarketAbi from "./../../../../../abis/EmancipaMarket.json";

const usePurchase = (address: `0x${string}` | undefined) => {
  const publicClient = createPublicClient({
    chain: chains.mainnet,
    transport: http("https://rpc.lens.xyz"),
  });
  const context = useContext(ModalContext);
  const [purchaseLoading, setPurchaseLoading] = useState<boolean>(false);
  const [buyDetails, setBuyDetails] = useState<{
    currency: string;
    amount: number;
  }>({
    currency: "0x",
    amount: 1,
  });

  const handlePurchase = async () => {
    if (
      !address ||
      buyDetails?.amount < 1 ||
      buyDetails?.currency?.trim() == "" ||
      buyDetails?.currency?.trim() == "0x"
    )
      return;
    setPurchaseLoading(true);
    try {
      const clientWallet = createWalletClient({
        chain: chains.mainnet,
        transport: custom((window as any).ethereum),
      });

      const { request } = await publicClient.simulateContract({
        address: EMANCIPA_MARKET,
        abi: EmancipaMarketAbi,
        functionName: "buy",
        chain: chains.mainnet,
        args: [
          buyDetails.currency,
          Number(context?.purchaseModal?.collectionId),
          buyDetails.amount,
        ],
        account: address,
      });
      const res = await clientWallet.writeContract(request);

      await publicClient.waitForTransactionReceipt({ hash: res });

      context?.setPurchaseModal(undefined);
      context?.setSuccess(true);
    } catch (err: any) {
      context?.setError(true);
      console.error(err.message);
    }
    setPurchaseLoading(false);
  };

  useEffect(() => {
    if (context?.purchaseModal) {
      setBuyDetails({
        currency: context?.purchaseModal?.acceptedTokens?.[0],
        amount: 1,
      });
    }
  }, [context?.purchaseModal]);

  return {
    handlePurchase,
    purchaseLoading,
    buyDetails,
    setBuyDetails,
  };
};

export default usePurchase;
