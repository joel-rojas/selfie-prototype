import * as Font from "expo-font";
import * as MediaLibrary from "expo-media-library";

import { SELFIES_DIR } from "@utilities/constants";

export const loadLocalFontFamily = async () => {
  return await Font.loadAsync({
    Inter: require("@assets/fonts/Inter.ttf"),
  });
};

export const makeSelfieAlbum = async (): Promise<
  MediaLibrary.PermissionStatus | Error
> => {
  const { status, accessPrivileges } = await MediaLibrary.getPermissionsAsync();
  if (
    accessPrivileges === "limited" ||
    status === MediaLibrary.PermissionStatus.DENIED ||
    status === MediaLibrary.PermissionStatus.UNDETERMINED
  ) {
    const permission = await MediaLibrary.requestPermissionsAsync();
    if (permission.granted && permission.accessPrivileges === "all") {
      const dirInfo = await MediaLibrary.getAlbumAsync(SELFIES_DIR);
      if (!dirInfo) {
        console.log("Selfie directory doesn't exist, creating...");
        await MediaLibrary.createAlbumAsync(SELFIES_DIR);
      }
      return permission.status;
    }
    throw new Error("No media access");
  } else {
    await MediaLibrary.requestPermissionsAsync();
    const dirInfo = await MediaLibrary.getAlbumAsync(SELFIES_DIR);
    if (!dirInfo) {
      console.log("Selfie directory doesn't exist, creating...");
      await MediaLibrary.createAlbumAsync(SELFIES_DIR);
    }
  }
  return status;
};
