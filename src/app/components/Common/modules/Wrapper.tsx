import FooterEntry from "./FooterEntry";
import { JSX } from "react";
import ModalsEntry from "../../Modals/modules/ModalsEntry";

export default function Wrapper({
  dict,
  page,
}: {
  dict: any;
  page: JSX.Element;
}) {
  return (
    <>
      <div className="relative w-full h-fit flex items-center justify-start flex-col gap-4">
        {page}
        <FooterEntry dict={dict} lang={"en"} />
      </div>
      <ModalsEntry dict={dict} />
    </>
  );
}
