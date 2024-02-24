import {
  ADD_USER_DATA,
  TURN_OFF_SPINNER,
  TURN_ON_SPINNER,
} from "../actions/actions";

const initialState = {
  content: {},
  loading: false,
};

const addUserData = (state = initialState, action) => {
  switch (action.type) {
    case TURN_ON_SPINNER:
      return {
        ...state,
        loading: true,
      };
    case TURN_OFF_SPINNER:
      return {
        ...state,
        loading: false,
      };
    case ADD_USER_DATA:
      return {
        ...state,
        content: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default addUserData;
