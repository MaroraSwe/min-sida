// Hoppar högst upp på sidan varje gång man byter sida.
// React Router byter bara innehållet – den rullar inte upp av sig själv.
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  // useLocation ger adressen man står på. key är ett nytt id vid varje sidbyte,
  // även när man klickar på sidan man redan står på (t.ex. Hem när man är på Hem).
  const { key } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 0 från vänster, 0 uppifrån = högst upp
  }, [key]); // ← kör igen varje gång key ändras

  return null; // visar ingenting på sidan – den gör bara jobbet ovan
}

export default ScrollToTop;
