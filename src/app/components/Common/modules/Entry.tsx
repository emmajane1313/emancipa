"use client";

import { FunctionComponent, JSX } from "react";
import Principal from "./Principal";
import Market from "../../Market/modules/Market";

const Entry: FunctionComponent<{ dict: any }> = ({ dict }): JSX.Element => {
  return (
    <div className="relative w-full h-fit flex flex-col items-start justify-start">
      <Market />
      <Principal dict={dict} />
    </div>
  );
};

export default Entry;
