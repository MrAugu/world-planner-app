import {
  UPDATE_LOADING_PROGRESS,
  TOGGLE_LOADING_STATE,
  GET_ITEM_CHUNK
} from "../types";
import * as LoaderService from "../services/loader";
const wait = (amount) => {
  return new Promise(resolve => setTimeout(resolve, amount));
}

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

export const getItemData = async (dispatch, state, updateProgress, totalProgress) => {
  const { maximum_size, total_count } = await LoaderService.requestItems(state, 1, 1);
  const page_count = total_count % maximum_size === 0 ? total_count / maximum_size : Math.floor(total_count / maximum_size) + 1;
  if (!page_count || isNaN(page_count)) return updateProgress(dispatch, 0, "Failed to load the world planner, make sure you're connected to the internet and refresh this page.");
  updateProgress(dispatch, 0, `Loading item data & sprites (0/${page_count})..`);
  for (let i = 1; i <= page_count; i++) {
    const { items } = await LoaderService.requestItems(state, i, maximum_size);
    updateProgress(dispatch, Math.floor(totalProgress / page_count), `Loading item data & sprites (${i}/${page_count})..`);
    dispatch({
      type: GET_ITEM_CHUNK,
      payload: { items }
    });
  }
  updateProgress(dispatch, 0, `Loading weather metadata..`);
};

export const getWeatherData = async (dispatch, state, updateProgress, totalProgress) => {
  const { maximum_size, total_count } = await LoaderService.requestWeathers(state, 1, 1);
  const page_count = total_count % maximum_size === 0 ? total_count / maximum_size : Math.floor(total_count / maximum_size) + 1;
  updateProgress(dispatch, 0, `Loading weather sprites (0/${page_count})..`);
  for (let i = 1; i <= page_count; i++) {
    const { weathers } = await LoaderService.requestWeathers(state, i, maximum_size);
    updateProgress(dispatch, Math.floor(totalProgress / page_count), `Loading weather sprites (${i}/${page_count})`);
    console.log(weathers);
  }
};
