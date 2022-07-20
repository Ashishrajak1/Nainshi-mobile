// import React from "react";
// import "./Checkout.css";
// import CheckoutProduct from "./CheckoutProduct";
// import CurrencyFormat from "react-currency-format";
// import { useStateValue } from "./contextstore/StateProvider";
// import getBasketTotal from "./contextstore/Reducer";
// function Checkout() {
//   const [{ basket }, dispatch] = useStateValue();
//   return (
//     <>
//       <div className="checkout">
//         <div className="checkout_left">
//           <div>
//             <h2 className="checkout_title">Your Shopping Basket</h2>
//             {basket.map((item) => (
//               <CheckoutProduct
//                 id={item.id}
//                 title={item.title}
//                 image={item.image}
//                 price={item.price}
//                 rating={item.rating}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="checkout_right">
//           <div className="subtotal">
//             <CurrencyFormat
//               renderText={(value) => (
//                 <>
//                   <p>
//                     Subtotal ({basket.length} item):<strong>{value}</strong>
//                   </p>
//                   <small className="subtotal_gitf">
//                     This order contains a gift
//                   </small>
//                   <input type="checkbox" />
//                 </>
//               )}
//               decimalScale={2}
//               value={getBasketTotal(basket)}
//               thousandSeparator={true}
//               prefix={"₹"}
//             />
//             <button> Proceed to Checkout</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Checkout;
