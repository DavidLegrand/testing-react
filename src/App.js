import { useCallback, useContext, useEffect, useState } from "react";
import "./App.css";
import List from "./List";

import { ThemeContext } from "./Context/ThemeContext";
import { LanguageContext } from "./Context/LanguageContext";
import { useTitle } from "./useTitle";

function App() {
  const [list, setList] = useState([
    { id: 1, title: "Vider le lave vaisselle", done: false },
    { id: 2, title: "Remplir le lave vaisselle", done: false },
    { id: 3, title: "Lancer le lave vaisselle", done: false },
    { id: 4, title: "Nettoyer la table", done: false },
  ]);
  const [compteur, setCompteur] = useState(0);
  const title = `${compteur} / ${list.length} tache${
    compteur !== 1 ? "s" : ""
  } terminée${compteur !== 1 ? "s" : ""}`;
  useTitle(title);

  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const numberOfDone = list.reduce((accumulator, current) => {
      return (accumulator += current.done ? 1 : 0);
    }, 0);
    setCompteur(numberOfDone);
  }, [list]);

  const changeItem = useCallback((newItem) => {
    setList((oldList) => {
      const updatedList = oldList.map((oldItem) => {
        return oldItem.id === newItem.id ? newItem : oldItem;
      });
      return updatedList;
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>To do list</h1>
      <h1>
        {theme} - {language}
      </h1>
      <List list={list} changeItem={changeItem} />
      <h2>{title}</h2>
    </div>
  );
}

export default App;
