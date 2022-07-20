import React from "react";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <>
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
             
              <p>
                Subtotal (0 item):<strong>0</strong>
              </p>
              <small className="subtotal_gitf">
                <input type="checkbox" />
                This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={0}
          thousandSeparator={true}
          prefix={"₹"}
        />
        <button> Proceed to Checkout</button>
      </div>
    </>
  );
}

export default Subtotal;
