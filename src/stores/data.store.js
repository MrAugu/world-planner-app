import { createStore } from 'redux';
import { reducer as dataReducer } from "../reducers/data.reducer";
export const store = createStore(dataReducer);