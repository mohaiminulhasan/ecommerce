import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_ITEM_IN_CART,
  DECREMENT_ITEM_IN_CART,
} from "../actionTypes";

import data from "../../data/items.json";

export default function cart(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART: {
      let item = data.filter((item) => item.id === action.payload.id)[0];
      return [...state, { ...item, quantity: 1 }];
    }

    case REMOVE_FROM_CART: {
      let result = state.filter((item) => item.id !== action.payload.id);
      return [...result];
    }

    case INCREMENT_ITEM_IN_CART: {
      let result = state.map((el) =>
        el.id === action.payload.id ? { ...el, quantity: el.quantity + 1 } : el
      );

      return [...result];
    }

    case DECREMENT_ITEM_IN_CART: {
      let result = state.map((el) =>
        el.id === action.payload.id ? { ...el, quantity: el.quantity - 1 } : el
      );

      return [...result];
    }

    default: {
      return [
        {
          id: 1,
          name: "Item 1",
          price: 10,
          quantity: 2,
        },
        {
          id: 2,
          name: "Item 2",
          price: 15,
          quantity: 3,
        },
      ];
    }
  }
}
