import { ModalContext } from "@/app/providers";
import { FunctionComponent, JSX, useContext } from "react";

const Success: FunctionComponent<{ dict: any }> = ({ dict }): JSX.Element => {
  const context = useContext(ModalContext);

  return (
    <div
      className="inset-0 justify-center fixed z-50 bg-opacity-50 backdrop-blur-sm overflow-y-hidden grid grid-flow-col auto-cols-auto w-full h-auto cursor-pointer items-center justify-center"
      onClick={() => context?.setSuccess(false)}
    >
      <div
        className="bg-pink border-black border-4 rounded-md font-pixel w-full sm:w-96 h-fit text-sm flex items-center justify-start p-3 cursor-default flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full sm:w-1/2 py-3 h-fit flex items-center justify-center flex-col gap-4 font-pixel">
          <div className="relative w-full h-fit flex text-black items-center justify-center text-center text-xs break-all">
            {dict?.Home?.success}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
