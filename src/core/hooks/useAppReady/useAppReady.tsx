import React from "react";
import { PermissionStatus } from "expo-camera";

import {
  makeSelfieAlbum,
  loadLocalFontFamily,
  requestCameraUsage,
} from "@utilities";

export const useAppReady = () => {
  const [appIsReady, setAppIsReady] = React.useState<boolean>(false);
  const [hasPermission, setHasPermission] = React.useState<boolean>(true);

  React.useEffect(() => {
    async function prepareLocalResources() {
      try {
        // Load async tasks to get local resources simultaneously
        // 1. Load local font family
        // 2. Create selfie folder within ios internal storage
        // 3. Allow camera access
        const [loadFont, albumStatus, cameraStatus] = await Promise.all([
          loadLocalFontFamily(),
          makeSelfieAlbum(),
          requestCameraUsage(),
        ]);
        if (albumStatus instanceof Error) {
          throw albumStatus;
        }
        if (cameraStatus !== PermissionStatus.GRANTED) {
          throw cameraStatus;
        }
      } catch (e) {
        setHasPermission(false);
      } finally {
        setAppIsReady(true);
      }
    }
    prepareLocalResources();
  }, []);

  return { appIsReady, hasPermission };
};
