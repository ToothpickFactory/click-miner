import { createStore, combineReducers } from "redux";
import { PlayerReducer } from "./reducers/PlayerReducer";

interface Action {
  type: string;
  payload?: {
    resource?: string;
    amount?: number;
    [key: string]: number | string;
  };
}

const combinedReducers = combineReducers({ PlayerReducer });
const store = createStore(combinedReducers);

export { Action, store };
