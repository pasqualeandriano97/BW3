import { SAVE_ALL_JOBS, SAVE_CATEGORY_JOBS } from "../actions/actions";

const initialState = {
  allJobs: [],
  categoryJobs: [],
};

const saveAllJobs = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ALL_JOBS:
      return {
        ...state,
        allJobs: action.payload,
      };
    case SAVE_CATEGORY_JOBS:
      return {
        ...state,
        categoryJobs: action.payload,
      };
    default:
      return state;
  }
};

export default saveAllJobs;
