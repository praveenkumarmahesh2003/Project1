import React from "react";

var total = 0;

function Cart () {
  return (
    <div className="cart">
      <h1>CART SECTION</h1>
    <div id="cartsection">

    </div>
    <button onClick={ () => totalprice()}>
      Total
    </button>

    </div>
  );
};
function totalprice(){
  const c = document.getElementById('cartsection');
  const l = document.createElement("li");
  l.append("Total price:" + total);
  l.append("     Thank you visit again");
  c.append(l);
}


function addToCart(x)
{
  const c = document.getElementById('cartsection');
  const l = document.createElement("li");
  total = parseInt(total) + parseInt(x);
  l.append(x);
  c.append(l);
}

export {addToCart};
export default Cart;
