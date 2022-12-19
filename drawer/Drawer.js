import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "../stacks/HomeStack";
import { Dimensions } from "react-native";
import CustomDrawer from "../components/Drawer/CustomDrawer";
import { useDispatch } from "react-redux";
import {
  setAccessToken,
  setAuthenticatedUser,
  setIsSignIn,
} from "../store/appSettingsSlice";
import * as AuthSession from "expo-auth-session";
import ENV_CONFIG from "../constants/env_config";

const SCREENWIDTH = Dimensions.get("screen").width;

export default function Drawer({ route }) {
  const dispatch = useDispatch();
  const routeParams = route.params;

  const logout = async (token) => {
    await AuthSession.revokeAsync(
      {
        token: token,
      },
      {
        revocationEndpoint: ENV_CONFIG.REVOKE_ENDPOINT,
      }
    );
  };

  useEffect(() => {
    if (routeParams?.accessToken && !routeParams?.logOut) {
      dispatch(setAccessToken(routeParams?.accessToken));
      dispatch(setIsSignIn(true));
    }
    if (routeParams?.logOut) {
      logout(routeParams.accessToken);
      dispatch(setIsSignIn(false));
      dispatch(setAccessToken(null));
      dispatch(setAuthenticatedUser(null));
    }
  }, [route]);

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
