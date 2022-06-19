import { authService } from "../../services/auth-service";

export function login(user) {
  return async (dispatch) => {
    try {
      console.log("authAction", user);
      const userToSave = await authService.login(user);
      dispatch({ type: "SET_LOGGED_IN_USER", user: userToSave });
    } catch (err) {
      console.log("err:", err);
    }
  };
}

export function registerAction(user) {
  return async (dispatch) => {
    try {
      const userForStore = await authService.register(user);
      console.log("finish registerAction");
      dispatch({ type: "SET_LOGGED_IN_USER", user: userForStore });
    } catch (err) {
      console.log("err:", err);
    }
  };
}

export function confirmRegister({ username, code }) {
  return async (dispatch) => {
    try {
      await authService.confirmRegister(username, code);
      console.log("finish confirmRegister");
    } catch (err) {
      console.log("err:", err);
      dispatch({ type: "SET_LOGGED_IN_USER", user: null });
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
