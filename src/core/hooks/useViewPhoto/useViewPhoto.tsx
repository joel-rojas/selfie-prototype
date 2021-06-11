import React from "react";
import { useNavigation } from "@react-navigation/core";
import { useDispatch } from "react-redux";
import * as MediaLibrary from "expo-media-library";

import * as routesConfig from "@navigation/config.json";
import { AppDispatch, loadSelfie } from "@store";
import { ISelfieItem } from "@models";
import { SELFIES_DIR } from "@utilities";

export const useViewPhoto = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();

  const viewPhoto = React.useCallback(async (selfieItem: ISelfieItem) => {
    const { id, imageUri } = selfieItem;
    const album = await MediaLibrary.getAlbumAsync(SELFIES_DIR);
    const { assets } = await MediaLibrary.getAssetsAsync({ album, first: 50 });
    const foundAsset = assets.find((f) => f.uri === imageUri);
    const asset = await MediaLibrary.getAssetInfoAsync(foundAsset!);
    if (asset) {
      dispatch(loadSelfie(id));
      navigation.navigate(routesConfig.routes.selfie, { id });
    }
  }, []);
  return [viewPhoto];
};
