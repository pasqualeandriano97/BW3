import { ADD_ALL_USERS_DATA } from "../actions/actions";

const initialState = {
  content: [],
};

const allUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALL_USERS_DATA:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default allUserReducer;
