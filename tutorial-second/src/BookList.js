import React, { Component } from 'react'
import Book from './Book'
import booksData from './BookData';



export default class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: booksData
        }
    }

    // state = {
    //     books: booksData
    // }

    // state = {
    //     books: [
    //         {
    //             id: 1,
    //             book: "book number one",
    //             author: "John Doe"
    //         },
    //         {
    //             id: 2,
    //             book: "book number Two",
    //             author: "Bobby Doe"
    //         }
    //     ]
    // };

    handleDelete = (id) => {
        const sortedBooks = this.state.books.filter((item) => item.id != id);
        this.setState({
            books: sortedBooks
        })
    }

  render() {
    const books = this.state.books;
    return (
      <section>
        {
            this.state.books.map((item, index) => <Book key={item.id} info={item} handleDelete={this.handleDelete}></Book>)
        }
      </section>
    )
  }
}
