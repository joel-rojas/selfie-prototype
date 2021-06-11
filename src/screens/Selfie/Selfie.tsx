import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { Image } from "react-native-elements";

import { getSingleSelfie } from "@store";
import { defaultStyles } from "@styles";

type ISelfieScreenProps = {
  route: { params: { id: string } };
};

const Selfie: React.FC<ISelfieScreenProps> = ({ route }) => {
  const selectedSelfie = useSelector(
    React.useMemo(() => getSingleSelfie(route.params.id), [route.params.id])
  );

  return (
    <View style={styles.container}>
      <View style={styles.selfieContainer}>
        <Image
          source={{ uri: selectedSelfie?.imageUri }}
          style={styles.selfie}
        ></Image>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.text}>{selectedSelfie?.createdDate}</Text>
          <Text style={styles.text}>{selectedSelfie?.createdTime}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#ffffff",
  },
  selfieContainer: {
    flex: 2,
    position: "relative",
  },
  selfie: {
    height: "100%",
    shadowColor: "#333",
    borderRadius: 50,
  },
  textContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#ffffff",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flex: 1,
  },
  text: {
    ...defaultStyles.text,
    fontSize: 16,
    color: "#333333",
    textDecorationLine: "underline",
  },
});

export default Selfie;
