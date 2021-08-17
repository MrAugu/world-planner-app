import { combineReducers } from "redux";
import { reducer as dataReducer } from "./data.reducer";
import { reducer as loadReducer } from "./load.reducer";

export default combineReducers({
  data: dataReducer,
  load: loadReducer
});
