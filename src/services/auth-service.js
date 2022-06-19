import { Auth } from "aws-amplify";

export const authService = {
  login,
  register,
  logout,
  confirmRegister,
};

async function login(username, password) {
  try {
    // const username = "shani.kupiec@gmail.com";
    // const password = "1234567JKYh!";

    const user = await Auth.signIn(username, password);
    console.log("user", user);
    return user;
  } catch (error) {
    console.log("error login in", error);
    throw error;
  }
}

async function register(userToSave) {
  try {
    // const userToSave = {
    //   name: "Guest",
    //   password: "1234567JKYh!",
    //   email: "shani.kupiec@gmail.com",
    //   phone: "+972544268251",
    // };
    const { user } = await Auth.signUp({
      username: userToSave.email,
      password: userToSave.password,
      attributes: {
        email: userToSave.email,
        phone_number: userToSave.phone,
        name: userToSave.name,
      },
    });
    // const newUser = {
    //   keyPrefix: data.keyPrefix,
    //   userDataKey: data.userDataKey,
    //   username: data.username,
    // };
    console.log(user);
    return user;
  } catch (error) {
    console.log("error register up:", error);
    throw error;
  }
}

async function confirmRegister(username, code) {
  try {
    console.log("username", username);
    console.log("code", code);
    await Auth.confirmSignUp(username, code);
  } catch (error) {
    console.log("error confirming sign up", error);
    throw error;
  }
}

async function resendConfirmationCode(username) {
  try {
    await Auth.resendSignUp(username);
    console.log("code resent successfully");
  } catch (error) {
    console.log("error resending code: ", error);
    throw error;
  }
}

async function logout() {
  try {
    // possible to add global option - logout from all users from all devices.
    await Auth.signOut();
  } catch (error) {
    console.log("error logout out: ", error);
    throw error;
  }
}
