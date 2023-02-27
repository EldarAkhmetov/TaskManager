import { login } from '../http/userAPI';
import { authAdmin } from '../store/reducers/authReducer';

export const userLogin = (userName, password) => async (dispatch) => {
  try {
    await login(userName, password);
    dispatch(authAdmin());
  } catch (e) {
    alert(e.response.data.message);
  }
};