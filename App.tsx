import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import "react-native-gesture-handler";

import { store } from "@store";
import * as routeConfig from "@navigation/config.json";
import List from "@screens/List/List";
import Selfie from "@screens/Selfie/Selfie";
import BaseHOC from "@components/BaseHOC/BaseHOC";
import Header from "@components/Header/Header";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <BaseHOC>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={routeConfig.routes.home}>
            <Stack.Screen
              name={routeConfig.routes.home}
              component={List}
              options={{
                header: (props) => <Header {...props}></Header>,
              }}
            ></Stack.Screen>
            <Stack.Screen
              name={routeConfig.routes.selfie}
              component={Selfie}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </BaseHOC>
    </Provider>
  );
}
