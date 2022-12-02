import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "../stacks/HomeStack";
import { Dimensions } from "react-native";
import CustomDrawer from "../components/Drawer/CustomDrawer"

const SCREENWIDTH = Dimensions.get("screen").width;

export default function Drawer() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#00000010",
          width: SCREENWIDTH * 0.85,
        },
      }}
    >
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
