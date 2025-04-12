import { useState } from "react";

const usePrincipal = () => {
  const [full, setFull] = useState<boolean>(false);

  return {
    full,
    setFull,
  };
};

export default usePrincipal;
