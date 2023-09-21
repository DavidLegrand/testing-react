import React from "react";
import Item from "./Item";

const List = ({ list, changeItem }) => {


  console.log("List component re-rendered");
  return list.map((item) => (
    <Item key={item.id} item={item} changeItem={changeItem} />
  ));
};

export default React.memo(List);
