import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Navigation from "../navigations/Navigation";
import LatestScreen from "../screens/LatestScreen";
import NewsScreen from "../screens/NewsScreen";
import NotificationScreen from "../screens/NotificationScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { Pressable } from "react-native";
import Buttons from "../components/UI/Buttons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectAuthenticateduser } from "../store/appSettingsSlice";

export default function HomeStack({ navigation, route }) {
  const user = useSelector(selectAuthenticateduser)
  const Tab = createBottomTabNavigator();
  const { colors } = useTheme();


  const HeaderOptions = {
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
    headerShadowVisible: false,
    headerTitleAlign: "center",
    headerStyle: {
      backgroundColor: "#000",
    },
    headerTitle: "App",
    headerLeftContainerStyle: {
      paddingLeft: 14,
    },
    headerRightContainerStyle: {
      paddingRight: 14,
    },
    headerLeft: () => (
      <Pressable onPress={() => navigation.openDrawer()}>
        <Ionicons name="filter-sharp" size={25} color="white" />
      </Pressable>
    ),
    headerRight: () => (
      <Pressable onPress={() => navigation.push("Login")}>
        <Buttons.HeaderUser
          avatar={user ? {uri: user.picture } : require("../assets/icons/userAvatar1.png")}
        />
      </Pressable>
    ),
  };

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBar={(props) => <Navigation {...props} />}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={HeaderOptions}
      />
      <Tab.Screen
        name="LatestScreen"
        component={LatestScreen}
        options={HeaderOptions}
      />
      <Tab.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={HeaderOptions}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={HeaderOptions}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={HeaderOptions}
      />
    </Tab.Navigator>
  );
}
