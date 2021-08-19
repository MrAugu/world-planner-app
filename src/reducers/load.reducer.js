import {
  UPDATE_LOADING_PROGRESS,
  TOGGLE_LOADING_STATE
} from "../types";
  
const defaultState = {
  loaded: false,
  loadProgress: 0,
  loadMessage: "Spinning up a new dimension..",
};

export const reducer = function (state = defaultState, action) {
  switch (action.type) {
    case UPDATE_LOADING_PROGRESS:
      const { percent, message } = action.payload;
      return {
        ...state,
        loadProgress: state.loadProgress + percent <= 100 ? state.loadProgress + percent : 100,
        loadMessage: message || state.loadMessage
      };
    case TOGGLE_LOADING_STATE:
      return {
        ...state,
        loaded: !state.loaded
      }; 
    default:
      return state;
  }
}
