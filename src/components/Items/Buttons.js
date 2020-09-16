import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  incrementItemInCart,
  decrementItemInCart,
  removeFromCart,
} from "../../redux/actions";

export default function Buttons({ id }) {
  const item = useSelector((state) =>
    state.cart.filter((el) => el.id === id)
  )[0]; // zero index needed as an array of one object is returned

  const dispatch = useDispatch();

  if (item) {
    return (
      <div className="item_buttons">
        <small>{item.quantity} items</small>
        <div>
          <button
            onClick={() =>
              dispatch(
                item.quantity > 1 ? decrementItemInCart(id) : removeFromCart(id)
              )
            }
          >
            -
          </button>
          <button onClick={() => dispatch(incrementItemInCart(id))}>+</button>
        </div>
      </div>
    );
  }

  return <button onClick={() => dispatch(addToCart(id))}>Add to cart</button>;
}
