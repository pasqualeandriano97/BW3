import { ADD_COMMENTS_POSTS } from "../actions/actions";

const initialState = {
  content: [],
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENTS_POSTS:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default commentReducer;
