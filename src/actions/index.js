import { SIGN_IN } from "./types";
export const signIn = () => {
  //action creater
  return {
    //action
    type: SIGN_IN,
    payload: "1",
  };
};
