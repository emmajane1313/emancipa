"use client";

import { Masonry } from "masonic";
import { FunctionComponent, memo, useCallback, useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { debounce } from "lodash";
import { stringify } from "querystring";
import TejaCambio from "./TejaCambio";
import { TejaInterfaz, TejasProps } from "../tipos/emancipa.types";

const TejasCambioMemo = memo(TejaCambio);

const useDeepMemoize = (value: Object[]) => {
  const hash = useMemo(() => stringify(value as any), [value]);
  return hash;
};

const Tejas: FunctionComponent<TejasProps> = ({
  tejasCargando,
  masTejasCargando,
  manejarMasElementos,
  elementos,
}): JSX.Element => {
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
    ({ indice, datos }: { indice: number; datos: TejaInterfaz }) => {
      return <TejasCambioMemo key={indice} datos={datos} />;
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
                  ...Array.from({ length: 20 }, (_) => ({
                    id: Math.random(),
                    type: "loader",
                  })),
                ]
              : tejasCargando
              ? Array.from({ length: 20 }, (_) => ({
                  id: Math.random(),
                  type: "loader",
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
