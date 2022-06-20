import { Auth } from "aws-amplify";

export const authService = {
  login,
  register,
  logout,
  confirmRegister,
};

async function login(username, password) {
  try {
    const user = await Auth.signIn(username, password);
    return user;
  } catch (error) {
    console.log("error login in", error);
    throw error;
  }
}

async function register(userToSave) {
  try {
    const { user } = await Auth.signUp({
      username: userToSave.email,
      password: userToSave.password,
      attributes: {
        email: userToSave.email,
        phone_number: userToSave.phone,
        name: userToSave.name,
      },
    });
    return user;
  } catch (error) {
    console.log("error register up:", error);
    throw error;
  }
}

async function confirmRegister(username, code) {
  try {
    await Auth.confirmSignUp(username, code);
  } catch (error) {
    console.log("error confirming sign up", error);
    throw error;
  }
}

async function resendConfirmationCode(username) {
  try {
    await Auth.resendSignUp(username);
  } catch (error) {
    console.log("error resending code: ", error);
    throw error;
  }
}

async function logout() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log("error logout out: ", error);
    throw error;
  }
}
