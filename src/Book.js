import React, { Component } from 'react';

class Book extends Component {
  
  render() {
    
    let Thumbnail = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : '';

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${Thumbnail}")` }}></div>
          <div className="book-shelf-changer">
            
            <select value={this.props.currentShelf}

              onChange = {(event) => this.props.changeShelves(
                this.props.book, event.target.value
              )}
            >

              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">Remove</option>

            </select>

          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    )
  }
}

export default Book;