import React from "react";
import { Provider } from "react-redux";
import "react-native-gesture-handler";

import { store } from "@store";
import BaseHOC from "@components/BaseHOC/BaseHOC";
import AppNavigation from "@navigation/AppNavigation";

export default function App() {
  return (
    <Provider store={store}>
      <BaseHOC>
        <AppNavigation />
      </BaseHOC>
    </Provider>
  );
}
