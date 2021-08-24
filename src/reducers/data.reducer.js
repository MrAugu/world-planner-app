import Collection from "@modcord/collection";
import {
  GET_AUTHORIZATION,
  GET_WEATHER_CHUNK,
  GET_ITEM_CHUNK
} from "../types";
import { Item } from "../structures/Item";
import { Weather } from "../structures/Weather";

const defaultState = {
  itemCache: new Collection(),
  weatherCache: new Collection(),
  token: null,
  tokenType: null,
  tokenExpires: null,
  tokenId: null
};

export const reducer = function (state = defaultState, action) {
  switch (action.type) {
    case GET_AUTHORIZATION:
      state.token = action.payload.authorization;
      state.tokenType = "Bearer";
      state.tokenId = action.payload.id;
      state.tokenExpires = new Date(action.payload.expires);
      return state;
    case GET_ITEM_CHUNK:
      for (const rawItem of action.payload.items) {
        const instance = new Item(rawItem);
        instance.init();
        state.itemCache.set(instance.id, instance);
      }
      return state;
    case GET_WEATHER_CHUNK:
      for (const rawWeather of action.payload.weathers) {
        const instance = new Weather(rawWeather);
        state.weatherCache.set(instance.name, instance);
      } 
      return state;
    default:
      return state;
  }
}
