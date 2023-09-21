import { createContext, useState } from "react";

const defaultLanguage = "fr";
export const LanguageContext = createContext(defaultLanguage);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(defaultLanguage);
  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
