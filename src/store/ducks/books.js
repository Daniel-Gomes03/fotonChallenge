// Action types
export const Types = {
  LOAD_BOOK_REQUEST: 'LOAD_BOOK_REQUEST',
  LOAD_BOOK_SUCCESS: 'LOAD_BOOK_SUCCESS',
  LOAD_BOOK_FAILURE: 'LOAD_BOOK_FAILURE',
  PAGINATION_BOOK_REQUEST: 'PAGINATION_BOOK_REQUEST',
  PAGINATION_BOOK_SUCCESS: 'PAGINATION_BOOK_SUCCESS',
  PAGINATION_BOOK_FAILURE: 'PAGINATION_BOOK_FAILURE',
  SEARCH_BOOK_REQUEST: 'SEARCH_BOOK_REQUEST',
  SEARCH_BOOK_SUCCESS: 'SEARCH_BOOK_SUCCESS',
  SEARCH_BOOK_FAILURE: 'SEARCH_BOOK_FAILURE',
};

// Reducer
const INITIAL_STATE = {
  data: [],
  loading: false,
  loadingPagination: false,
  error: false,
};

export default function books(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_BOOK_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_BOOK_SUCCESS:
      return {
        ...state,
        data: action.payload.data.items,
        loading: false,
        error: false,
      };
    case Types.LOAD_BOOK_FAILURE:
      return { ...state, error: true, loading: false };
    case Types.PAGINATION_BOOK_REQUEST:
      return { ...state, loadingPagination: true };
    case Types.PAGINATION_BOOK_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload.data.items],
        loadingPagination: false,
        error: false,
      };
    case Types.PAGINATION_BOOK_FAILURE:
      return { ...state, error: true, loadingPagination: false };
    case Types.SEARCH_BOOK_REQUEST:
      return { ...state, loading: false };
    case Types.SEARCH_BOOK_SUCCESS:
      return {
        ...state,
        data: action.payload.data.items,
        loading: false,
        error: false,
      };
    case Types.SEARCH_BOOK_FAILURE:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}

// Action creators
export const Creators = {
  loadBookRequest: () => ({
    type: Types.LOAD_BOOK_REQUEST,
  }),
  loadBookSuccess: data => ({
    type: Types.LOAD_BOOK_SUCCESS,
    payload: { data },
  }),
  loadBookFailure: () => ({
    type: Types.LOAD_BOOK_FAILURE,
  }),
  paginationBookRequest: startIndex => ({
    type: Types.PAGINATION_BOOK_REQUEST,
    payload: { startIndex },
  }),
  paginationBookSuccess: data => ({
    type: Types.PAGINATION_BOOK_SUCCESS,
    payload: { data },
  }),
  paginationBookFailure: () => ({
    type: Types.PAGINATION_BOOK_FAILURE,
  }),
  searchBookRequest: search => ({
    type: Types.SEARCH_BOOK_REQUEST,
    payload: { search },
  }),
  searchBookSuccess: data => ({
    type: Types.SEARCH_BOOK_SUCCESS,
    payload: { data },
  }),
  searchBookFailure: () => ({
    type: Types.SEARCH_BOOK_FAILURE,
  }),
};
