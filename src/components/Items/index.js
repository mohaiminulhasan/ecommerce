import React from "react";
import "./style.css";

import Item from "./Item";
import data from "../../data/items.json";

export default function Items() {
  const items = data.map((item) => (
    <Item key={item.id} id={item.id} name={item.name} />
  ));

  return <div id="items">{items}</div>;
}
