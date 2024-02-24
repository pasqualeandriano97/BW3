import {
  UPDATE_USER_POST,
  TURN_OFF_SPINNER,
  TURN_ON_SPINNER,
  ADD_USER_POST,
  RESET_POST_DATA,
  DELETE_USER_POST,
} from "../actions/actions";

const initialState = {
  content: [],
};

const addUserPost = (state = initialState, action) => {
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
    case UPDATE_USER_POST:
      return {
        ...state,
        content: action.payload,
        loading: false,
      };
    case RESET_POST_DATA:
      return {
        ...initialState,
      };
    case ADD_USER_POST:
      return {
        ...state,
        content: [...state.content, action.payload],
        loading: false,
      };
    case DELETE_USER_POST:
      return {
        ...state,
        content: state.content.filter((post) => post._id !== action.payload),
        loading: false,
      };
    default:
      return state;
  }
};

export default addUserPost;
