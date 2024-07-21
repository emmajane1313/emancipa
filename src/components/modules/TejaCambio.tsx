"use client";
import { FunctionComponent } from "react";
import { TejaCambioProps, TejaTipo } from "../tipos/emancipa.types";
import Imagen from "./Imagen";
import Texto from "./Texto";

const TejaCambio: FunctionComponent<TejaCambioProps> = ({
  datos,
}): JSX.Element => {
  switch (datos.tipo) {
    case TejaTipo.Imagen:
      return <Imagen teja={datos} />;

    default:
      return <Texto teja={datos} />;
  }
};

export default TejaCambio;
