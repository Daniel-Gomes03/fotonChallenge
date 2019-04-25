import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { Creators as ActionBooks } from '~/store/ducks/books';

export function* loadBooks() {
  try {
    const response = yield call(
      api.get,
      'books/v1/volumes?q=design&filter=paid-ebooks&maxResults=18',
    );

    yield put(ActionBooks.loadBookSuccess(response.data));
  } catch (error) {
    yield put(ActionBooks.loadBookFailure());
  }
}

export function* paginationBooks(action) {
  try {
    const { startIndex } = action.payload;

    const response = yield call(
      api.get,
      `books/v1/volumes?q=design&filter=paid-ebooks&maxResults=18&startIndex=${startIndex}`,
    );

    yield put(ActionBooks.paginationBookSuccess(response.data));
  } catch (error) {
    yield put(ActionBooks.paginationBookFailure());
  }
}

export function* searchBooks(action) {
  try {
    const { search } = action.payload;

    const response = yield call(
      api.get,
      `books/v1/volumes?q=${search}&filter=paid-ebooks&maxResults=18`,
    );

    yield put(ActionBooks.searchBookSuccess(response.data));
  } catch (error) {
    yield put(ActionBooks.searchBookFailure());
  }
}
