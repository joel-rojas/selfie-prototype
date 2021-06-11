import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { defaultStyles } from "@styles";
import { ISelfieItem } from "@models";
import { useSelfieList } from "@hooks";

const List: React.FC<{}> = () => {
  const list = useSelfieList();

  const renderItem = ({ item }: { item: ISelfieItem }) => (
    <TouchableOpacity key={item.id} onPress={() => {}}>
      <Text>{item.createdDate}</Text>
      <Text>{item.createdTime}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
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
  title: {
    ...defaultStyles.text,
  },
});

export default List;
