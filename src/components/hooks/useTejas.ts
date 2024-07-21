import { useEffect, useState } from "react";
import { TejaInterfaz } from "../tipos/emancipa.types";
import elementosDatos from "./../../../public/elementos.json"

const useTejas = () => {
  const [tejasCargando, setTejasCargando] = useState<boolean>(false);
  const [masTejasCargando, setMasTejasCargando] = useState<boolean>(false);
  const [cargados, setCargados] = useState<Set<number>>(new Set());
  const [elementos, setElementos] = useState<{
    hasMore: boolean;
    items: TejaInterfaz[];
  }>({
    hasMore: true,
    items: [],
  });
  const manejarMasElementos = async (): Promise<void> => {
    try {
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const seleccionarAleatorios = (cantidad: number): TejaInterfaz[] => {
    const elementosArray = elementosDatos as unknown as TejaInterfaz[];
    const nuevosElementos: TejaInterfaz[] = [];
    const elementosCargados = new Set(cargados);

    while (nuevosElementos.length < cantidad && elementosCargados.size < elementosArray.length) {
      const indice = Math.floor(Math.random() * elementosArray.length);
      if (!elementosCargados.has(indice)) {
        elementosCargados.add(indice);
        nuevosElementos.push(elementosArray[indice]);
      }
    }

    setCargados(elementosCargados);
    return nuevosElementos;
  };

  const manejarElementos = async (): Promise<void> => {
    setTejasCargando(true);
    try {
      const nuevosElementos = seleccionarAleatorios(20);
      setElementos((prevState) => ({
        hasMore: prevState.hasMore && prevState.items.length + nuevosElementos.length < elementosDatos.length,
        items: [...prevState.items, ...nuevosElementos],
      }));
    } catch (err: any) {
      console.error(err.message);
    } 
    setTejasCargando(false);
  };

  useEffect(() => {
    if (elementos?.items?.length < 1) {
      manejarElementos();
    }
  }, []);

  return {
    tejasCargando,
    manejarMasElementos,
    masTejasCargando,
    elementos,
  };
};

export default useTejas;
