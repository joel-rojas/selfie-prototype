import React from "react";
import { StyleSheet } from "react-native";
import { StackHeaderProps } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/core";
import { Header as HeaderEl } from "react-native-elements";

import * as routeConfig from "@navigation/config.json";
import { defaultStyles } from "@styles";

const Header: React.FC<StackHeaderProps> = () => {
  const navigation = useNavigation();
  const handleNavigateSelfieScreen = () => {
    navigation.navigate(routeConfig.routes.camera);
  };
  return (
    <HeaderEl
      containerStyle={styles.container}
      centerComponent={{ text: "Selfie", style: { ...styles.title } }}
      rightComponent={{
        icon: "camera",
        type: "font-awesome",
        style: { ...styles.selfieIcon },
        onPress: handleNavigateSelfieScreen,
      }}
    ></HeaderEl>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  selfieIcon: {
    color: "#333",
  },
  title: {
    ...defaultStyles.text,
    fontSize: 18,
    textAlignVertical: "center",
    color: "#333333",
    textTransform: "uppercase",
  },
});

export default Header;
