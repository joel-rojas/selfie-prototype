import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { defaultStyles } from "@styles";

const HeaderTitle: React.FC<{}> = () => {
  return (
    <View>
      <Text style={styles.text}>Selfies</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    ...defaultStyles.text,
    fontSize: 18,
    color: "#333333",
  },
});

export default HeaderTitle;
