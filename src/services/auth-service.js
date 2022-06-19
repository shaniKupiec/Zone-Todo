import { Auth } from "aws-amplify";

export const authService = {
  login,
  register,
  logout,
};

async function login(user) {
  try {
    const { newUser } = await Auth.signUp({
      username: user.username,
      password: user.password,
      attributes: {
        email: user.email, // optional
        // phone_number: user.phone,   // optional - E.164 number convention
        // other custom attributes
      },
    });
    console.log(newUser);
    return newUser
  } catch (error) {
    console.log("error signing up:", error);
  }
}

async function confirmSignUp() {
  try {
    await Auth.confirmSignUp(username, code);
  } catch (error) {
    console.log("error confirming sign up", error);
  }
}

async function register({ username, password }) {
  try {
    const user = await Auth.signIn(username, password);
    return user
  } catch (error) {
    console.log("error signing in", error);
  }
}

async function resendConfirmationCode() {
  try {
    await Auth.resendSignUp(username);
    console.log("code resent successfully");
  } catch (err) {
    console.log("error resending code: ", err);
  }
}

async function logout() {
  try {
    // possible to add global option - logout from all users from all devices.
    await Auth.signOut();
  } catch (error) {
    console.log("error signing out: ", error);
  }
}
