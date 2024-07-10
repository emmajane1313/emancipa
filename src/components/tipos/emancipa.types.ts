export interface TejaInterfaz {}

export type Dictionary = {
  Home: {};
  Nav: {
    lan: string;
    guerrera: string;
  };
  "404": {
    nada: string;
  };
};


export type TejasProps = {
  tejasCargando: boolean
  masTejasCargando: boolean
  manejarMasElementos: () => Promise<void>
  elementos: {
    hasMore: boolean,
    items: TejaInterfaz[]
  }
}