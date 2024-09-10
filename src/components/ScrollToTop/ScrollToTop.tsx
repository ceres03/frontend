import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  const hash = useRef<string>(null);
  const pathname = useRef<string>(null);

  useEffect(() => {
    console.log(location);

    if (location.pathname != pathname.current) {
      pathname.current = location.pathname;
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    if (location.hash) {
      hash.current = location.hash;
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return null;
}
export default ScrollToTop;
