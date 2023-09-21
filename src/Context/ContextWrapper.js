import React from 'react'
import { ThemeProvider } from "./ThemeContext";
import { LanguageProvider } from "./LanguageContext";

const ContextWrapper = ({children}) => {
  return (
    <ThemeProvider>
        <LanguageProvider>
            {children}
        </LanguageProvider>
    </ThemeProvider>
  )
}

export default ContextWrapper