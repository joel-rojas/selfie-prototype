import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, sortList } from "@store";

export const useSortlist = () => {
  const dispatch = useDispatch<AppDispatch>();

  const sortFn = React.useCallback((value: boolean) => {
    dispatch(sortList(value));
  }, []);

  return [sortFn];
};
