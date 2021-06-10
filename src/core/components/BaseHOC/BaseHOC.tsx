import React from "react";
import AppLoading from "expo-app-loading";
import { Text, View } from "react-native";

import { useAppReady } from "@hooks";

const BaseHOC: React.FC<{}> = ({ children }) => {
  const { appIsReady, hasPermission } = useAppReady();

  if (appIsReady && hasPermission) {
    return <>{children}</>;
  }
  if (!appIsReady) {
    return <AppLoading />;
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Change required permissions and restart the app</Text>
    </View>
  );
};

export default BaseHOC;
