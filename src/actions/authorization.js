import { GET_AUTHORIZATION } from "../types";
import AuthorizationService from "../services/authorization";

export const getAuthorizationFromCache = (dispatch) => {
  return AuthorizationService.getCache()
    .then(payload => dispatch({
      type: GET_AUTHORIZATION,
      payload
    }))
    .catch(() => {});
};

export const getAuthorization = (dispatch) => {
  return AuthorizationService.getAuthorization()
    .then(payload => dispatch({
      type: GET_AUTHORIZATION,
      payload
    }))
    .catch(() => {});
};