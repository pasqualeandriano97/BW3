import { CURRENT_TOKEN } from "../actions/actions";
import { CURRENT_ID } from "../actions/actions";

const initialState = {
  token: "",
  id: "",
};

const addCurrentToken = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case CURRENT_ID:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};

export default addCurrentToken;
