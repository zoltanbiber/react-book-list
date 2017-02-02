import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this .props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books // Whenever the state changes this props will be re-assigned a new value
  };
}

// This is the connected container component itself which we need to export
// Whatever is returned by mapStateToProps will show up as props inside of BookList.
// If the state changes this container component will be re-rendered.
export default connect(mapStateToProps)(BookList);
