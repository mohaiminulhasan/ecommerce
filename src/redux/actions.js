import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_ITEM_IN_CART,
  DECREMENT_ITEM_IN_CART,
} from "./actionTypes";

export const addToCart = (id) => ({
  type: ADD_TO_CART,
  payload: {
    id: id,
  },
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: {
    id: id,
  },
});

export const incrementItemInCart = (id) => {
  return {
    type: INCREMENT_ITEM_IN_CART,
    payload: {
      id: id,
    },
  };
};

export const decrementItemInCart = (id) => {
  return {
    type: DECREMENT_ITEM_IN_CART,
    payload: {
      id: id,
    },
  };
};
