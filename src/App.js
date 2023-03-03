import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Search from './Search';
import Home from './Home';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  
  state = {
    books: []
  }


  // A function to update the shelves 
  shelfChange = (book, shelf) => {

   BooksAPI.update(book, shelf).then(() => {
     BooksAPI.getAll().then((books) => {
      this.setState({ books: books });
      })
   });

  }

  // Gets all the books from the API and update the state of the APP
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })

  }


  render() {
  
    return (
      
      <div className="app">

        <Route exact path="/" render={() => (
          <Home
             books={this.state.books}
             changeShelves={this.shelfChange}
           />
        )}/>


        <Route path="/search" render={() => (
          <Search
            books={this.state.books}
            changeShelves={this.shelfChange}
          />
        )}/>

      </div>
    )
  }
}

export default BooksApp