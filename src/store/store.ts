import { combineReducers, createStore } from "redux";
import { ISelfieState, selfiesReducer } from "./reducers";

export type IAppState = {
  selfies: ISelfieState;
};

const rootReducers = combineReducers({
  selfies: selfiesReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const store = createStore(rootReducers);
