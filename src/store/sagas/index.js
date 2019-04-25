import { all, takeLatest } from 'redux-saga/effects';

import { Types as TypeBooks } from '~/store/ducks/books';

import { loadBooks, paginationBooks, searchBooks } from './books';

export default function* rootSaga() {
  return yield all([
    takeLatest(TypeBooks.LOAD_BOOK_REQUEST, loadBooks),
    takeLatest(TypeBooks.PAGINATION_BOOK_REQUEST, paginationBooks),
    takeLatest(TypeBooks.SEARCH_BOOK_REQUEST, searchBooks),
  ]);
}
