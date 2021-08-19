import {
  UPDATE_LOADING_PROGRESS,
  TOGGLE_LOADING_STATE
} from "../types";
import * as LoaderService from "../services/loader";

export const updateProgress = (dispatch, percent, message) => {
  return dispatch({
    type: UPDATE_LOADING_PROGRESS,
    payload: {
      percent,
      message
    }
  });
};

export const toggleLoaded = (dispatch) => {
  return dispatch({
    type: TOGGLE_LOADING_STATE
  });
};

export const getItemData = (dispatch, state, updateProgress, totalProgress) => {
  
};
