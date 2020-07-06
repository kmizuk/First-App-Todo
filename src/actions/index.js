import baseURL from "../apis/baseURL";
import history from "../history";
import { SIGN_IN } from "./types";
import { SIGN_OUT } from "./types";
import { SIGN_UP } from "./types";

export const signIn = () => {
  //action creater
  return {
    //action
    type: SIGN_IN,
    payload: "1",
  };
};

export const signOut = () => {
  //action creater
  return {
    //action
    type: SIGN_OUT,
    payload: "2",
  };
};

export const signUp = (formValues) => async (dispatch) => {
  try {
    console.log("ok");
    const response = await baseURL.post("/api/users/", { ...formValues });
    dispatch({ type: SIGN_UP, payload: response.data });
    // 新規登録結果画面に遷移
    history.push("/signup/result");
  } catch (err) {
    throw err;
  }
};
