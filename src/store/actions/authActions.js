import { authService } from "../../services/auth-service";

export function login(user) {
  return async (dispatch) => {
    try {
      await authService.login(user);
      dispatch({ type: "SET_LOGGED_IN_USER", user });
    } catch (err) {
      console.log("err:", err);
    }
  };
}

export function register(user) {
  return async (dispatch) => {
    try {
      await authService.register(user);
      dispatch({ type: "SET_LOGGED_IN_USER", user });
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
