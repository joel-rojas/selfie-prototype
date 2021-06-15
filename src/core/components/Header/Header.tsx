import React from "react";
import { StyleSheet } from "react-native";
import { StackHeaderProps } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/core";
import { Button, Header as RNEHeader } from "react-native-elements";

import * as routeConfig from "@navigation/config.json";
import { useSortlist } from "@hooks";
import HeaderTitle from "@components/Header/HeaderTitle";

const Header: React.FC<StackHeaderProps> = () => {
  const navigation = useNavigation();
  const [sortFn] = useSortlist();
  const [sortFlag, setSortFlag] = React.useState(false);

  React.useEffect(() => {
    sortFn(sortFlag);
  }, [sortFlag]);

  const handleNavigateSelfieScreen = () => {
    navigation.navigate(routeConfig.routes.camera);
  };

  const handleSortList = () => {
    setSortFlag(!sortFlag);
  };

  return (
    <RNEHeader
      leftComponent={
        <Button
          onPress={handleSortList}
          type="clear"
          titleStyle={styles.sortBtn}
          title="Sort"
        />
      }
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
  sortBtn: {
    color: "#333",
  },
});

export default Header;
