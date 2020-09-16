import React from "react";
import Buttons from "./Buttons";

export default function Item(props) {
  return (
    <div className="item">
      <img
        src="https://via.placeholder.com/140?text=Demo+Image"
        alt={props.name}
      />
      <span>{props.name}</span>
      <Buttons id={props.id} />
    </div>
  );
}
