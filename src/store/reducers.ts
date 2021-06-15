import { ISelfieItem } from "@models";
import { ISelfieActionLabels, ISelfieActions } from "./actions";

export type ISelfieState = {
  selfieList: ISelfieItem[];
  isLoaded: boolean;
  selectedSelfieId: string | null;
};

export const initialState: ISelfieState = {
  selfieList: [],
  selectedSelfieId: null,
  isLoaded: false,
};

export const selfiesReducer = (
  state = initialState,
  action: ISelfieActions
): ISelfieState => {
  switch (action.type) {
    case ISelfieActionLabels.SELFIE_LIST_LOADED: {
      return {
        ...state,
        selfieList: action.payload as ISelfieItem[],
        isLoaded: true,
      };
    }
    case ISelfieActionLabels.SELFIE_SAVED: {
      return {
        ...state,
        selfieList: [action.payload as ISelfieItem, ...state.selfieList],
      };
    }
    case ISelfieActionLabels.LOAD_SELFIE: {
      return {
        ...state,
        selectedSelfieId: action.payload as string,
      };
    }
    case ISelfieActionLabels.SORT_LIST: {
      const { payload } = action;
      if (!payload) {
        return {
          ...state,
          selfieList: [...state.selfieList].sort((a, b) => {
            return +new Date(b.createdDate) - +new Date(a.createdDate);
          }),
        };
      }
      return {
        ...state,
        selfieList: [...state.selfieList].sort((a, b) => {
          return +new Date(a.createdDate) - +new Date(b.createdDate);
        }),
      };
    }
    default:
      return state;
  }
};
