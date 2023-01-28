import { createStore } from "redux";
import CartReducer from "./Reducer/CartReducer";
export const store = createStore(
  CartReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
