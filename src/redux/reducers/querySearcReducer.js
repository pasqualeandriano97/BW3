import { QUERY_SEARCH } from "../actions/actions";
import { CURRENT_COMPANY } from "../actions/actions";

const initialState = {
  content: [],
  current: {},
};

const querySearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUERY_SEARCH:
      return {
        ...state,
        content: action.payload,
      };
    case CURRENT_COMPANY:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
};

export default querySearchReducer;
