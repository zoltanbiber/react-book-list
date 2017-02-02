import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this .props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
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

// Anything returned from this function will end up as props on the BookList container
// this.props.selectBook will call our action creator
function mapDispatchToProps(dispatch) {
  // bindActionCreators binds the container component to reducers.
  // It makes sure that the action returned by our action creator flows down to all the reducers
  // Whenever selectBook is called, the result should be passed to all of our reducers.
  return bindActionCreators({ selectBook: selectBook }, dispatch); // The second selectBook is the actual actioncreator that we've imported
}

// This is the connected container component itself which we need to export
// Whatever is returned by mapStateToProps will show up as props inside of BookList.
// If the state changes this container component will be re-rendered.
// Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook
// Make it available as a prop.
// Note: This is a common usecase for connect but it can be used in more ways (see Redux docs)
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
