"use client";

import { Masonry } from "masonic";
import { FunctionComponent, memo, useCallback, useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { debounce } from "lodash";
import { stringify } from "querystring";
import TejaCambio from "./TejaCambio";
import { TejaInterfaz } from "../tipos/emancipa.types";
import useTejas from "../hooks/useTejas";

const TejasCambioMemo = memo(TejaCambio);

const useDeepMemoize = (value: Object[]) => {
  const hash = useMemo(() => stringify(value as any), [value]);
  return hash;
};

const Tejas: FunctionComponent = (): JSX.Element => {
  const { tejasCargando, manejarMasElementos, masTejasCargando, elementos } =
    useTejas();
  const searchItemsMemo = useDeepMemoize(elementos?.items || []);
  const debouncedHandleMoreSearch = useCallback(
    debounce(() => {
      if (elementos?.hasMore && !tejasCargando && !masTejasCargando) {
        manejarMasElementos();
      }
    }, 300),
    [elementos, tejasCargando, masTejasCargando, manejarMasElementos]
  );

  const renderTile = useCallback(
    ({
      index,
      width,
      data,
    }: {
      index: number;
      width: number;
      data: TejaInterfaz;
    }) => {
      return <TejasCambioMemo key={index} datos={data} />;
    },
    [searchItemsMemo]
  );

  return (
    <div
      className={`relative w-full min-h-screen h-fit overflow-y-scroll pb-6 px-4 pt-6`}
    >
      <InfiniteScroll
        dataLength={
          tejasCargando
            ? 40
            : (elementos?.items || [])?.length + (masTejasCargando ? 20 : 0)
        }
        loader={<></>}
        scrollThreshold={1}
        hasMore={elementos?.hasMore!}
        next={debouncedHandleMoreSearch}
        className={`w-full h-screen items-start justify-center`}
      >
        <Masonry
          overscanBy={5}
          key={
            tejasCargando
              ? 20
              : (elementos?.items || [])?.length + (masTejasCargando ? 20 : 0)
          }
          items={
            masTejasCargando
              ? [
                  ...(elementos?.items || []),
                  ...(Array.from({ length: 20 }, (_) => ({
                    id: Math.random(),
                    tipo: "loader",
                  })) as any),
                ]
              : tejasCargando
              ? Array.from({ length: 20 }, (_) => ({
                  id: Math.random(),
                  tipo: "loader",
                }))
              : elementos?.items || []
          }
          render={renderTile}
          columnGutter={50}
          maxColumnCount={3}
        />
      </InfiniteScroll>
    </div>
  );
};

export default Tejas;
