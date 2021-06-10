import { combineReducers, createStore } from "redux";
import { ISelfieState, selfiesReducer } from "./reducers";

export type IAppState = {
  selfies: ISelfieState;
};

const rootReducers = combineReducers({
  selfies: selfiesReducer,
});

export const store = createStore(rootReducers);
