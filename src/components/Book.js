import StarRating from "./StarRating";
import React, { useState } from 'react';
import { addToCart } from "./cart";


const Book = (props) => {
  const [cartItems, setCartItems] = useState([]);

  // const addToCart = (item) => {
  //   setCartItems([...cartItems, item]);
  // };

  const { img, title, author, number,book } = props;


  return (
    <article className="book">
      <span className="number">{`#${number + 1}`}</span>
      <img src={img} alt={title}  />
      <a href={book}>Link to book</a>
      <StarRating></StarRating>
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button value={1000} onClick={() => addToCart("1000")}>Add To Cart</button>
    </article>
  );
};

export default Book;
