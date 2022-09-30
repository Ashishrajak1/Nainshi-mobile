import { useSelector } from "react-redux";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../ActionType";
export const initialState = { basket: [] };

const CartReducer = (state = initialState, action) => {
  console.log(action);
  console.log(action.item);

  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case REMOVE_FROM_CART:
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `can't remove product (id:${action.id}) as its not in basket !`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    default: {
      return state;
    }
  }
};
export default CartReducer;

// selector;
// basket=useSelector(state=>state.basket)
// export const getBasketTotal = (basket) =>
//   basket?.reduce((amount, item) => basket.item.price + amount, 0);

// console.log(basket.item.price);
