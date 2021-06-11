import React from "react";
import { StyleSheet } from "react-native";
import { StackHeaderProps } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/core";
import { Header as RNEHeader } from "react-native-elements";

import * as routeConfig from "@navigation/config.json";
import HeaderTitle from "@components/Header/HeaderTitle";

const Header: React.FC<StackHeaderProps> = () => {
  const navigation = useNavigation();

  const handleNavigateSelfieScreen = () => {
    navigation.navigate(routeConfig.routes.camera);
  };

  return (
    <RNEHeader
      containerStyle={styles.container}
      centerComponent={<HeaderTitle />}
      rightComponent={{
        icon: "camera",
        type: "font-awesome",
        style: { ...styles.selfieIcon },
        onPress: handleNavigateSelfieScreen,
      }}
    ></RNEHeader>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  selfieIcon: {
    color: "#333",
  },
});

export default Header;
