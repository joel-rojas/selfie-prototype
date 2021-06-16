import { ISelfieItem, parseLocaleDateToDate } from "@models";
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
            const aDate = parseLocaleDateToDate(new Date(a.createdDate), a.createdTime);
            const bDate = parseLocaleDateToDate(new Date(b.createdDate), b.createdTime);
            return +bDate - +aDate;
          }),
        };
      }
      return {
        ...state,
        selfieList: [...state.selfieList].sort((a, b) => {
          const aDate = parseLocaleDateToDate(new Date(a.createdDate), a.createdTime);
          const bDate = parseLocaleDateToDate(new Date(b.createdDate), b.createdTime);
          return +aDate - +bDate;
        }),
      };
    }
    default:
      return state;
  }
};
