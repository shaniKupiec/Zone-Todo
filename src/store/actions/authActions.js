import { authService } from "../../services/auth-service";

export function login(user) {
  return async (dispatch) => {
    try {
      console.log('authAction', user);
      const userToSave = await authService.login(user);
      dispatch({ type: "SET_LOGGED_IN_USER", userToSave });
    } catch (err) {
      console.log("err:", err);
    }
  };
}

export function register(user) {
  return async (dispatch) => {
    try {
      const userToSave = await authService.register(user);
      dispatch({ type: "SET_LOGGED_IN_USER", userToSave });
    } catch (err) {
      console.log("err:", err);
    }
  };
}

export function logout() {
  return async (dispatch) => {
    try {
      await authService.logout();
      dispatch({ type: "SET_LOGGED_IN_USER", user: null });
    } catch (err) {
      console.log("err:", err);
    }
  };
}
