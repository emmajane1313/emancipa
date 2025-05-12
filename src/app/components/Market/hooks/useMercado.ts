import { useContext, useEffect, useState } from "react";
import { getCollections } from "../../../../../graphql/queries/getCollections";
import { getOrders } from "../../../../../graphql/queries/getOrders";
import { Collection, Order } from "../types/market.types";
import { ModalContext } from "@/app/providers";
import { IMAGE_SET } from "@/app/lib/constantes";

const useMercado = (address: `0x${string}` | undefined) => {
  const context = useContext(ModalContext);
  const [cargando, setCargando] = useState<boolean>(false);
  const [moreCargando, setMoreCargando] = useState<boolean>(false);
  const [nfts, setNFTs] = useState<Collection[]>([]);
  const [hasMore, setHasMore] = useState<{
    more: boolean;
    skip: number;
  }>({
    more: true,
    skip: 0,
  });
  const [cargandoCollected, setCargandoCollected] = useState<boolean>(false);
  const [moreCargandoCollected, setMoreCargandoCollected] =
    useState<boolean>(false);
  const [nftsCollected, setNFTsCollected] = useState<Order[]>([]);
  const [hasMoreCollected, setHasMoreCollected] = useState<{
    more: boolean;
    skip: number;
  }>({
    more: true,
    skip: 0,
  });

  const handleNFTs = async () => {
    setCargando(true);
    try {
      const data = await getCollections(0);
      setNFTs(data?.data?.collectionCreateds);
      setHasMore({
        more: data?.data?.collectionCreateds?.length >= 20 ? true : false,
        skip: data?.data?.collectionCreateds?.length >= 20 ? 20 : 0,
      });
    } catch (err: any) {
      console.error(err.message);
    }
    setCargando(false);
  };

  const handleMoreNFTs = async () => {
    if (!hasMore.more) return;
    setMoreCargando(true);
    try {
      const data = await getCollections(hasMore.skip);

      setNFTs([...nfts, ...data?.data?.collectionCreateds]);
      setHasMore({
        more: data?.data?.collectionCreateds?.length >= 20 ? true : false,
        skip:
          data?.data?.collectionCreateds?.length >= 20 ? hasMore.skip + 20 : 0,
      });
    } catch (err: any) {
      console.error(err.message);
    }
    setMoreCargando(false);
  };

  const handleNFTsCollected = async () => {
    setCargandoCollected(true);
    try {
      const data = await getOrders(address!, 0);

      setNFTsCollected(data?.data?.orderCreateds);
      setHasMoreCollected({
        more: data?.data?.orderCreateds?.length >= 20 ? true : false,
        skip: data?.data?.orderCreateds?.length >= 20 ? 20 : 0,
      });
    } catch (err: any) {
      console.error(err.message);
    }
    setCargandoCollected(false);
  };

  const handleMoreNFTsCollected = async () => {
    if (!hasMoreCollected.more) return;
    setMoreCargandoCollected(true);
    try {
      const data = await getOrders(address!, hasMoreCollected.skip);

      setNFTsCollected([...nftsCollected, ...data?.data?.orderCreateds]);
      setHasMoreCollected({
        more: data?.data?.orderCreateds?.length >= 20 ? true : false,
        skip:
          data?.data?.orderCreateds?.length >= 20
            ? hasMoreCollected.skip + 20
            : 0,
      });
    } catch (err: any) {
      console.error(err.message);
    }
    setMoreCargandoCollected(false);
  };

  useEffect(() => {
    if (nfts?.length < 1) {
      handleNFTs();
    }
  }, []);

  useEffect(() => {
    if (address) {
      handleNFTsCollected();
    }
  }, [address, context?.success]);

  return {
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
  };
};

export default useMercado;
