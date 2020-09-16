import React from "react";
import "./style.css";
import { useSelector } from "react-redux";

import ShoppingCartItem from "./ShoppingCartItem";

export default function ShoppingCart(props) {
  const cart = useSelector((state) => state.cart);
  const no_of_items = cart.length;

  let total = 0;
  const items = cart.map((item) => {
    total += item.quantity * item.price;
    return <ShoppingCartItem key={item.id} {...item} />;
  });
  if (props.cartView) {
    return (
      <div id="shoppingcart-small" onClick={() => props.setCartView(false)}>
        <div>{no_of_items} items</div>
        <div>$ {total}</div>
      </div>
    );
  }
  return (
    <div id="shoppingcart-large">
      <div id="shoppingcart-large-head" onClick={() => props.setCartView(true)}>
        <div>{no_of_items} items</div>
        <div>$ {total}</div>
      </div>
      <div id="shoppingcart-large-body">{items}</div>
      <div id="shoppingcart-large-footer">
        <button>Place Order</button>
      </div>
    </div>
  );
}
