import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import * as routeConfig from "./config.json";
import List from "@screens/List/List";
import Selfie from "@screens/Selfie/Selfie";
import Camera from "@screens/Camera/Camera";
import Header from "@components/Header/Header";

const Stack = createStackNavigator();

const AppNavigation: React.FC<{}> = () => {
  return (
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
        <Stack.Screen
          name={routeConfig.routes.camera}
          component={Camera}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
