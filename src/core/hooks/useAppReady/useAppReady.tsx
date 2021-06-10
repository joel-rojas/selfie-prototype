import React from "react";

import { makeSelfieAlbum, loadLocalFontFamily } from "@utilities";

export const useAppReady = () => {
  const [appIsReady, setAppIsReady] = React.useState<boolean>(false);
  const [hasPermission, setHasPermission] = React.useState<boolean>(true);

  React.useEffect(() => {
    async function prepareLocalResources() {
      try {
        // Load async tasks to get local resources
        // Load local font family
        await loadLocalFontFamily();
        // Create selfie folder within ios internal storage
        const status = await makeSelfieAlbum();
        if (status instanceof Error) {
          throw status;
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
