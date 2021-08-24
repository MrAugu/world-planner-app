import axios from "axios";
import { api_base_url } from "../configuration.json";

export const requestItems = async (state, page, page_size) => {
  let data;
  while (!data) {
    data = await axios.get(`${api_base_url}/items?page=${page}&page_size=${page_size}`, {
      headers: {
        "User-Agent": `WorldPlanner/v1.0.0 (Artifical, Axios, en-US)`,
        "Authorization": `${state.data.tokenType} ${state.data.token}`
      }
    }).then(response => {
      const code = response.status;
      if (code !== 200) return;
      return response.data;
    }).catch(() => {});
  }
  return data;
};

export const requestWeathers = async (state, page, page_size) => {
  let data;
  while (!data) {
    data = await axios.get(`${api_base_url}/media/weathers?page=${page}&page_size=${page_size}`, {
      headers: {
        "User-Agent": `WorldPlanner/v1.0.0 (Artifical, Axios, en-US)`,
        "Authorization": `${state.data.tokenType} ${state.data.token}`
      }
    }).then(response => {
      const code = response.status;
      if (code !== 200) return;
      return response.data;
    }).catch(() => {});
  }
  return data;
};
