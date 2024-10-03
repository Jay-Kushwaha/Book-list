import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

import Book from "./Book";
import {books} from './books';

const Booklist = () => {
  return (
    <section className="page">

      <h1>Book List</h1>
      <div className="booklist">
        {books.map((book) =>{
        return <Book {...book} key={book.id}/>
      })}
      </div>
    </section>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist/>)