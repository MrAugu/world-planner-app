import { createStore } from "redux";
import reducer from "../reducers/index.reducer";
export const store = createStore(reducer);