import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { books } from './data/books';
import Book from './components/Book';
import {AiFillInstagram} from "react-icons/ai";
import {AiFillFacebook} from "react-icons/ai"
import {SiGmail} from "react-icons/si"
import {AiFillYoutube} from "react-icons/ai"
import PrimarySearchAppBar from './components/nav';
import Nav from './components/nav';
import Cart from './components/cart';

const BookList = () => {
  return (
    <div className='main-body'>
      
      <h1 className='main-title'>
        Mind Blowing <span> Books</span>
      </h1>
      <h4 className='date'>PK BOOK SHOP</h4>
      <h1 className='h11'><span>OUR PRODUCTS</span></h1>
      <article className='book-list'>
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </article>
      <h1>ABOUT SECTION</h1>
      <p className='para'>One of my favourite memories of school days is when we had a free period and I used to run to the library. I then used to imagine how it would feel to go to a bookstore. Living in a small town, we didn’t have many big bookstores. But when I visited my first bookstore in Dehradun, I was awestruck and happy to see so many books all around me.

While the Amazon and ebooks feel great, and easy to access, going to a bricks-and-mortar store is a completely new experience. I keep returning to the (The English Book Depot, Book World) stores to relish the way a good bookshop makes me feel — welcomed, relaxed, excited and connected.</p>
      <section className='bottom'>
        <h5 className='bottom-title'>
          Best Seller Of the Year Build By <span>Praveen</span>
        </h5>
        <h5 className='bottom-dy'>
          <a href='https://www.amazon.in/?&ext_vrnc=hi&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=58355126069&hvpone=&hvptwo=&hvadid=486458706470&hvpos=&hvnetw=g&hvrand=15518684234231089141&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007810&hvtargid=kwd-10573980&hydadcr=14453_2154373' target='_blank' rel='noreferrer'>
            PK.BookShop
          </a>
        </h5>
      <Cart/>
        <div className='icons'>
          <ul className='ulitems'>
            <li>
            <i><AiFillInstagram></AiFillInstagram></i>
            </li>
            <li>
            <i><AiFillFacebook></AiFillFacebook></i>
            </li>
            <li>
            <i><SiGmail></SiGmail></i>
            </li>
            <li>
            <i><AiFillYoutube></AiFillYoutube></i>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default BookList;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
