import React, { useContext } from "react";
import i18n from "../config/i18next";
import { useModal } from "@nextui-org/react";
const LanguageContext = React.createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const { setVisible: setVisible1, bindings: bindings1 } = useModal();
 

  return (
    <div>
      <LanguageContext.Provider
        value={{ changeLanguage, setVisible1, bindings1}}
      >
        {children}
      </LanguageContext.Provider>
    </div>
  );
}
