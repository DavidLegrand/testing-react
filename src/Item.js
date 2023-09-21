import React, { memo, useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import { LanguageContext } from "./Context/LanguageContext";


const Item = ({ item, changeItem }) => {
  const { id, title, done } = item;
  const toggleDone = () => changeItem({ ...item, done: !done });

  const { toggleTheme } = useContext(ThemeContext);
  const { toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      {id} - {title}{" "}
      <input type="checkbox" checked={done} onChange={toggleDone} />
      <button onClick={toggleTheme}>ToggleTheme</button>
      <button onClick={toggleLanguage}>ToggleLanguage</button>
    </div>
  );
};

export default memo(Item);
