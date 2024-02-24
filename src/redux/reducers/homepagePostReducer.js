import { SAVE_HOME_POST } from "../actions/actions";

const initialState = {
  content: [],
};

const saveHomePost = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_HOME_POST:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default saveHomePost;
