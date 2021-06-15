import { ISelfieItem } from "@models";

export enum ISelfieActionLabels {
  LOAD_SELFIE_LIST = "LOAD_SELFIE_LIST",
  SELFIE_LIST_LOADED = "SELFIE_LIST_LOADED",
  SAVE_SELFIE = "SAVE_SELFIE",
  SELFIE_SAVED = "SELFIE_SAVED",
  LOAD_SELFIE = "LOAD_SELFIE",
  SORT_LIST = "SORT_LIST",
}

export type ISelfieActionPayload =
  | ISelfieItem
  | ISelfieItem[]
  | string
  | boolean;

export type ISelfieActions = {
  type: ISelfieActionLabels;
  payload?: ISelfieActionPayload;
};

export const loadSelfieList = (): ISelfieActions => ({
  type: ISelfieActionLabels.LOAD_SELFIE_LIST,
});

export const selfieListLoaded = (payload: ISelfieItem[]) => ({
  type: ISelfieActionLabels.SELFIE_LIST_LOADED,
  payload,
});

export const saveSelfie = () => ({
  type: ISelfieActionLabels.SAVE_SELFIE,
});

export const selfieSaved = (payload: ISelfieItem) => ({
  type: ISelfieActionLabels.SELFIE_SAVED,
  payload,
});

export const loadSelfie = (payload: string) => ({
  type: ISelfieActionLabels.LOAD_SELFIE,
  payload,
});

export const sortList = (payload: boolean) => ({
  type: ISelfieActionLabels.SORT_LIST,
  payload,
});
