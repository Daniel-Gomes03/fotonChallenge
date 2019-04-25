// Action types
export const Types = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
};

// Reducer
const INITIAL_STATE = {
  username: null,
  loading: false,
  error: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return { ...state, loading: true };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        error: false,
        loading: false,
      };
    case Types.LOGIN_FAILURE:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
}

// Actions creators
export const Creators = {
  loginRequest: username => ({
    type: Types.LOGIN_REQUEST,
    payload: { username },
  }),

  loginSuccess: username => ({
    type: Types.LOGIN_SUCCESS,
    payload: { username },
  }),

  loginFailure: () => ({
    type: Types.LOGIN_FAILURE,
  }),
};
