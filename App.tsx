import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import "react-native-gesture-handler";

import BaseHOC from "@components/BaseHOC/BaseHOC";
import List from "@screens/List/List";
import { store } from "@store";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <BaseHOC>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={List}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </BaseHOC>
    </Provider>
  );
}
