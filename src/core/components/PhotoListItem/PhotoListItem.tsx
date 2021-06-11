import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native-elements";

import { ISelfieItem } from "@models";
import { useViewPhoto } from "@hooks";
import { defaultStyles } from "@styles";

type IPhotoListItemProps = {
  item: ISelfieItem;
};

const PhotoListItem: React.FC<IPhotoListItemProps> = ({ item }) => {
  const [viewPhoto] = useViewPhoto();

  const handleViewPhotoScreen = () => {
    viewPhoto(item);
  };
  return (
    <TouchableOpacity
      key={item.id}
      onPress={handleViewPhotoScreen}
      style={styles.container}
    >
      <Image source={{ uri: item.imageUri }} style={styles.image}>
        <View style={styles.textContainer}>
          <Text style={styles.dateText}>{item.createdDate}</Text>
          <Text style={styles.timeText}>{item.createdTime}</Text>
        </View>
      </Image>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, margin: 2, flexDirection: "column" },
  image: { height: 300, borderRadius: 25 },
  textContainer: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  dateText: { ...defaultStyles.text, color: "#ffffff", fontSize: 20 },
  timeText: { ...defaultStyles.text, color: "#ffffff" },
});

export default PhotoListItem;
