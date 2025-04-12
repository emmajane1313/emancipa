"use client";

import { FunctionComponent, JSX, useContext } from "react";
import Purchase from "./Purchase";
import { ModalContext } from "@/app/providers";
import Success from "./Success";
import Error from "./Error";

const ModalsEntry: FunctionComponent<{ dict: any }> = ({
  dict,
}): JSX.Element => {
  const context = useContext(ModalContext);
  return (
    <>
      {context?.purchaseModal && <Purchase dict={dict} />}
      {context?.success && <Success dict={dict} />}
      {context?.error && <Error dict={dict} />}
    </>
  );
};

export default ModalsEntry;
