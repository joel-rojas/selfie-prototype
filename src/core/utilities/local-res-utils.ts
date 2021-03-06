import * as Font from "expo-font";
import * as MediaLibrary from "expo-media-library";
import { Camera, PermissionStatus } from "expo-camera";

import { SELFIES_DIR } from "@utilities/constants";

export const loadLocalFontFamily = async () => {
  return await Font.loadAsync({
    Inter: require("@assets/fonts/Inter.ttf"),
  });
};

export const makeSelfieAlbum = async (): Promise<
  MediaLibrary.PermissionStatus | Error
> => {
  const setSelfieDir = async () => {
    const dirInfo = await MediaLibrary.getAlbumAsync(SELFIES_DIR);
    if (!dirInfo) {
      console.log("Selfie directory doesn't exist, creating...");
      return await MediaLibrary.createAlbumAsync(SELFIES_DIR);
    }
    return dirInfo;
  };
  const { status, accessPrivileges } = await MediaLibrary.getPermissionsAsync();

  if (
    accessPrivileges === "limited" ||
    status === MediaLibrary.PermissionStatus.DENIED ||
    status === MediaLibrary.PermissionStatus.UNDETERMINED
  ) {
    const permission = await MediaLibrary.requestPermissionsAsync();
    if (permission.granted && permission.accessPrivileges === "all") {
      await setSelfieDir();
      return permission.status;
    }
    throw new Error("No media access");
  } else {
    await MediaLibrary.requestPermissionsAsync();
    await setSelfieDir();
  }
  return status;
};

export const requestCameraUsage = async (): Promise<
  PermissionStatus | Error
> => {
  const { status } = await Camera.getPermissionsAsync();
  if (
    status === PermissionStatus.DENIED ||
    status === PermissionStatus.UNDETERMINED
  ) {
    const permission = await Camera.requestPermissionsAsync();
    if (permission.granted && permission.status === PermissionStatus.GRANTED) {
      return permission.status;
    }
    throw new Error("No camera access");
  }
  return status;
};
