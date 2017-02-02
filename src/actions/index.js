// A plain Javascript function, returns an object.
export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action
  // an object with a type property (and an optional payload)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}