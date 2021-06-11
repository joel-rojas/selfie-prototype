import { IAppState } from "./store";

export const getSelfieList = (state: IAppState) => state.selfies.selfieList;

export const getSingleSelfie = (state: IAppState, { id }: { id: string }) =>
  state.selfies.selfieList.find((item) => item.id === id);
