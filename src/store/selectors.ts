import { IAppState } from "./store";

export const getSelfieList = (state: IAppState) => state.selfies.selfieList;

export const getSingleSelfie = (id: string) => (state: IAppState) =>
  state.selfies.selfieList.find((item) => item.id === id);
