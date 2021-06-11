import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { ISelfieItem } from "@models";
import { useSelfieList } from "@hooks";
import PhotoListItem from "@components/PhotoListItem/PhotoListItem";

const List: React.FC<{}> = () => {
  const list = useSelfieList();
  const numColumns = 2;

  const renderItem = ({ item }: { item: ISelfieItem }) => (
    <PhotoListItem item={item} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        numColumns={numColumns}
        key={numColumns}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

export default List;
