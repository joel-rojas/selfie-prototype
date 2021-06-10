import { ISelfieState } from "./reducers";

export const getSelfieList = (state: ISelfieState) => state.selfieList;

export const getSingleSelfie = (state: ISelfieState, { id }: { id: string }) =>
  state.selfieList.find((item) => item.id === id);
