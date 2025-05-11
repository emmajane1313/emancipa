import { FunctionComponent } from "react";
import { FaFlickr, FaTumblr, FaPinterest } from "react-icons/fa";

const Social: FunctionComponent<{
  socials: {
    link: string;
    type: string;
  }[];
}> = ({ socials }) => {
  return (
    <div className="absolute w-fit h-fit bottom-2 left-2 flex flex-row gap-2">
      {socials?.filter(Boolean).map((tipo, i) => {
        return (
          <div
            key={i}
            className="relative w-fit h-fit flex cursor-pointer p-1 bg-black rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              window.open(tipo?.link);
            }}
          >
            {tipo?.type == "Flickr" ? (
              <FaFlickr color={"#E725C6"} size={15} />
            ) : tipo?.type == "Pinterest" ? (
              <FaPinterest color={"#E725C6"} size={15} />
            ) : (
              <FaTumblr color={"#E725C6"} size={15} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Social;
