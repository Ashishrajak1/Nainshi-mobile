import React, { useEffect, useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
function Subtotal() {
  const [total, setTotal] = useState(0.0); ``
  const item = useSelector((state) => state.basket);
  useEffect(() => {
    // Update total when item qty changes
    const newTotal = item.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
  }, [item]);

  return (
    <>
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <div>
              Subtotal ({item.length} item) : <strong>{value}</strong>
            </div>
          )}
          decimalScale={2}
          value={total}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />
        <button> Proceed to Checkout</button>
      </div>
    </>
  );
}

export default Subtotal;
