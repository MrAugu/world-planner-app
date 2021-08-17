import { GET_AUTHORIZATION } from "../types";
import * as AuthorizationService from "../services/authorization";
const wait = (amount) => {
  return new Promise(resolve => setTimeout(resolve, amount));
}

export const getAuthorizationFromCache = (dispatch) => {
  return AuthorizationService.getCache()
    .then(payload => dispatch({
      type: GET_AUTHORIZATION,
      payload
    }))
    .catch(() => {});
};

export const getAuthorization = async (dispatch) => {
  let authorizationData;
  while (!authorizationData) {
    await wait(500);
    authorizationData = await AuthorizationService.getAuthorization();
  }
  dispatch({
    type: GET_AUTHORIZATION,
    payload: authorizationData
  });
};