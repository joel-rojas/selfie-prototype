import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as MediaLibrary from "expo-media-library";

import { AppDispatch, getSelfieList, loadSelfieList, selfieListLoaded } from "@store";
import { parseSelfieList } from "@models";
import { SELFIES_DIR } from "@utilities";

export const useSelfieList = () => {
  const selfieList = useSelector(getSelfieList);
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(loadSelfieList());
    async function loadInternalPhotos() {
      const album = await MediaLibrary.getAlbumAsync(SELFIES_DIR);
      const { assets } = await MediaLibrary.getAssetsAsync({
        album,
        first: 50,
      });
      const parsedSelfieListData = parseSelfieList(assets);
      dispatch(selfieListLoaded(parsedSelfieListData));
    }
    loadInternalPhotos();
  }, []);

  return selfieList;
};
