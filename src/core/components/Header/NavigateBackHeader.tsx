import React from "react";
import { StyleSheet } from "react-native";
import { Header as RNEHeader } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";

import HeaderTitle from "@components/Header/HeaderTitle";

const NavigateBackHeader: React.FC<{}> = () => {
  const navigation = useNavigation();

  const handleNavigateBack = () => {
    navigation.goBack();
  };
  return (
    <RNEHeader
      containerStyle={styles.container}
      leftComponent={{
        icon: "chevron-left",
        type: "font-awesome",
        style: { ...styles.selfieIcon },
        onPress: handleNavigateBack,
      }}
      centerComponent={<HeaderTitle />}
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

export default NavigateBackHeader;
