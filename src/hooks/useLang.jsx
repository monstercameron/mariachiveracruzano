import { useContext, useCallback } from "react";
import { GlobalContext } from "../context/GlobalContext";
const useLang = () => {
  const [{ lang }, setState] = useContext(GlobalContext);
  const getLang = useCallback(() => lang, [lang]);
  const switchLang = useCallback(
    () => setState(s => ({ ...s, lang: s.lang === "en" ? "es" : "en" })),
    [setState]
  );
  return [getLang, switchLang];
};
export default useLang;
