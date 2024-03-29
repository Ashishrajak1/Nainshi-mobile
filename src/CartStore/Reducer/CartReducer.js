import { ADD_TO_CART, REMOVE_FROM_CART, SET_USER } from "../ActionType";
export const initialState = { basket: [], user: null };

const CartReducer = (state = initialState, action) => {
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
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default: {
      return state;
    }
  }
};
export default CartReducer;
