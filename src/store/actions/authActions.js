import { authService } from "../../services/auth-service";

export function login({ username, password }) {
  return async (dispatch) => {
    try {
      console.log("authAction", username, password);
      const userToSave = await authService.login(username, password);
      dispatch({ type: "SET_LOGGED_IN_USER", user: userToSave });
    } catch (error) {
      console.log("error:", error);
      throw error;
    }
  };
}

export function registerAction(user) {
  return async (dispatch) => {
    try {
      const userForStore = await authService.register(user);
      console.log("finish registerAction");
      dispatch({ type: "SET_LOGGED_IN_USER", user: userForStore });
    } catch (error) {
      console.log("error:", error);
      throw error;
    }
  };
}

export function confirmRegister({ username, code }) {
  return async (dispatch) => {
    try {
      await authService.confirmRegister(username, code);
      console.log("finish confirmRegister");
    } catch (error) {
      console.log("error:", error);
      dispatch({ type: "SET_LOGGED_IN_USER", user: null });
      throw error;
    }
  };
}

export function logout() {
  return async (dispatch) => {
    try {
      await authService.logout();
      dispatch({ type: "SET_LOGGED_IN_USER", user: null });
    } catch (error) {
      console.log("error:", error);
      throw error;
    }
  };
}
