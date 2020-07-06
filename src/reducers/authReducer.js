import { SIGN_IN, SIGN_UP } from "../actions/types";
import { SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  //定義
  isSignedIn: null,
  userId: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP:
      return state;
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };

    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: action.payload };

    default:
      return state;
  }
};
