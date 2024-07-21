export interface TejaInterfaz {
  altura: string;
  imagen: string;
  texto: string;
  titulo: string;
  tipo: TejaTipo
}

export enum TejaTipo {
  Imagen,
  Texto,
}

export type Dictionary = {
  Home: {};
  Tejas: {};
  Nav: {
    lan: string;
    guerrera: string;
  };
  "404": {
    nada: string;
  };
};

export type TejaCambioProps = {
  datos: TejaInterfaz
}