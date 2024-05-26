import { useEffect, useState } from "react";

export const useCheckMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return { isMobile };
};
