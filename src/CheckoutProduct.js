// import React from "react";
// import { FaStar } from "react-icons/fa";
// import "./CheckoutProduct.css";
// import { useStateValue } from "./contextstore/StateProvider";
// function CheckoutProduct({ id, image, title, price, rating }) {
//   // const [{ basket }, dispatch] = useStateValue();
//   // const RemovefromBasket = () => {
//   //   //remove the item from the basket
//   //   dispatch({
//   //     type: "REMOVE_FROM_BASKET",
//   //     id: id,
//   //   });
//   // };
//   return (
//     <>
//       <div className="chechoutproduct">
//         <img className="chechoutproduct_img" src={image} alt="" />

//         <h3 className="chechoutproduct_title">{title}</h3>
//         <div className="chechoutproduct_rating">
//           {Array(rating)
//             .fill()
//             .map((_, i) => (
//               <p>
//                 <FaStar />
//               </p>
//             ))}
//         </div>
//         <p className="chechoutproduct_price">
//           <strong>{price}</strong>
//           <strong> ₹</strong>
//         </p>

//         <button /*onClick={RemovefromBasket}*/ className="add_remove_btn">
//           Remove From Basket
//         </button>
//       </div>
//     </>
//   );
// }

// export default CheckoutProduct;
