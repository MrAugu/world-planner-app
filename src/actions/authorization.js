import { GET_AUTHORIZATION } from "../types";
import * as AuthorizationService from "../services/authorization";
const wait = (amount) => {
  return new Promise(resolve => setTimeout(resolve, amount));
}

export const getAuthorizationFromCache = (dispatch) => {
  return AuthorizationService.getCache()
    .then(payload => {
      dispatch({
        type: GET_AUTHORIZATION,
        payload
      });
      return payload;
    })
    .catch(() => {});
};

export const getAuthorization = async (dispatch) => {
  try {
    let authorizationData;
    while (!authorizationData) {
      authorizationData = await AuthorizationService.getAuthorization();
      await wait(500);
    }
    dispatch({
      type: GET_AUTHORIZATION,
      payload: authorizationData
    });
    return authorizationData;
  } catch (err) {
    return;
  }
};
