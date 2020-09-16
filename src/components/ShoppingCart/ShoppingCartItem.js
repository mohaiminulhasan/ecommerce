import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementItemInCart,
  decrementItemInCart,
} from "../../redux/actions";

export default function ShoppingCartItem(props) {
  const dispatch = useDispatch();

  return (
    <div className="cart_item">
      <div>
        <div>{props.name}</div>
        <small>Quantity: {props.quantity}</small>
      </div>

      <div className="cart_item_right">
        <div>$ {props.price * props.quantity}</div>
        <div>
          <button
            disabled={props.quantity > 1 ? false : true}
            onClick={() => dispatch(decrementItemInCart(props.id))}
          >
            -
          </button>
          <button onClick={() => dispatch(incrementItemInCart(props.id))}>
            +
          </button>
          <button onClick={() => dispatch(removeFromCart(props.id))}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
