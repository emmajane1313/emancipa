export interface TejaInterfaz {
  altura: string;
  imagen: string;
  texto: string;
  titulo: string;
  tipo: TejaTipo;
  color: string;
}

export enum TejaTipo {
  Imagen,
  Texto,
}

export type Dictionary = {
  Home: {
    toma: string;
    por: string;
  };
  "404": {
    nada: string;
  };
};

export type TejaCambioProps = {
  datos: TejaInterfaz;
};
