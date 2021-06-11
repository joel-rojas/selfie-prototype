import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native-elements";

import { defaultStyles } from "@styles";
import { ISelfieItem } from "@models";
import { useSelfieList } from "@hooks";

const List: React.FC<{}> = () => {
  const list = useSelfieList();

  const renderItem = ({ item }: { item: ISelfieItem }) => (
    <TouchableOpacity
      key={item.id}
      onPress={() => {}}
      style={{ flex: 1, margin: 1, flexDirection: "column" }}
    >
      <Image source={{ uri: item.imageUri }} style={{ height: 300 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ ...defaultStyles.text, color: "#ffffff", fontSize: 20 }}
          >
            {item.createdDate}
          </Text>
          <Text style={{ ...defaultStyles.text, color: "#ffffff" }}>
            {item.createdTime}
          </Text>
        </View>
      </Image>
    </TouchableOpacity>
  );
  const columns = 2;
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        numColumns={columns}
        key={columns}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default List;
