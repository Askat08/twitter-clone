import { LOAD_PROFILE, GET_PROFILE } from "../constants";

const initinalState = {
  loading: false,
  user: null
};

export default (state = initinalState, action) => {
  switch (action.type) {
    case LOAD_PROFILE:
      return {
        ...state,
        loading: true
      };
    case GET_PROFILE:
      return {
        ...state,
        lodaing: false,
        user: action.payload
      };
    default:
      return state;
  }
};
