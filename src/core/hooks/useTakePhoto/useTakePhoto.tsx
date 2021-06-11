import React from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

import * as routeConfig from "@navigation/config.json";
import { AppDispatch, saveSelfie, selfieSaved } from "@store";
import { parseSavedSelfie } from "@models";
import { SELFIES_DIR } from "@utilities";

export const useTakePhoto = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();

  const takePhoto = React.useCallback(
    async (currentCamera: Camera, isCameraReady) => {
      if (isCameraReady) {
        dispatch(saveSelfie());
        const album = await MediaLibrary.getAlbumAsync(SELFIES_DIR);
        const { uri } = await currentCamera.takePictureAsync();
        const asset = await MediaLibrary.createAssetAsync(uri);
        const isSaved = await MediaLibrary.addAssetsToAlbumAsync(
          [asset],
          album
        );
        if (isSaved) {
          const parsedSelfieData = parseSavedSelfie(
            asset.creationTime,
            asset.uri
          );
          dispatch(selfieSaved(parsedSelfieData));
          navigation.navigate(routeConfig.routes.home);
        }
      }
    },
    []
  );

  return [takePhoto];
};
