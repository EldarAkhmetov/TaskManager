const AUTH_ADMIN = 'AUTH_ADMIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  isAuth: false
};

export default function authReducer(state = defaultState, action) {
  switch(action.type) {
  case AUTH_ADMIN:
    return {
      ...state,
      isAuth: true
    };
  case LOGOUT:
    return {
      ...defaultState
    };
  default:
    return state;
  }
}

export const authAdmin = () => ({
  type: AUTH_ADMIN
});

export const logout = () => ({
  type: LOGOUT
});