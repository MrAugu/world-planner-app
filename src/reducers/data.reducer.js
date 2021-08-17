import Collection from "@modcord/collection";

const defaultState = {
  itemCache: new Collection(),
  weatherCache: new Collection(),
  apiAuthorization: null,
  apiAuthorizationType: null // localStorage.getItem("key") ? Buffer.from(localStorage.getItem("key"), "hex").toString() : null
};

export const reducer = function (state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}