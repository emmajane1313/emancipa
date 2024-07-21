import { FunctionComponent } from "react";
import { TejaInterfaz } from "../tipos/emancipa.types";

const Texto: FunctionComponent<{
    teja: TejaInterfaz
}> = ({
    teja
}): JSX.Element => {
    return (
        <div className="relative w-full flex items-center justify-center flex-col"></div>
    )
}

export default Texto;