import React, { useEffect } from "react";
import { Button, StatusBar } from "react-native";
import Wrapper from "../components/Wrapper";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import {
  selectAccessToken,
  selectIsSignIn,
} from "../store/appSettingsSlice";
import ENV_CONFIG from "../constants/env_config";

export default function LoginScreen({ navigation }) {

  const accessToken = useSelector(selectAccessToken);
  const isSignIn = useSelector(selectIsSignIn);

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      ENV_CONFIG.EXPO_CLIENT,
    androidClientId:
      ENV_CONFIG.ANDROID_CLIENT,
  });

  const persistAuth = async (auth) => {
    await AsyncStorage.setItem("auth", JSON.stringify(auth));
    await AsyncStorage.setItem("accessToken", auth.accessToken);
    if (auth.refreshToken) {
      await AsyncStorage.setItem("refreshToken", auth.refreshToken);
    }

    navigation.navigate("Root", { accessToken: auth.accessToken });
  };

  const logout = async () => {
    await AsyncStorage.removeItem("auth");
    await AsyncStorage.removeItem("refreshToken");
    await AsyncStorage.removeItem("accessToken");
    await AsyncStorage.removeItem("userData");
    navigation.navigate("Root", { logOut: true, accessToken });
  };

  useEffect(() => {
    if (response?.type === "success") {
      persistAuth(response.authentication);
    }
  }, [response]);

  return (
    <Wrapper noActivity>
      {!isSignIn ? (
        <Button
          disabled={!request}
          title={"Login"}
          onPress={() => promptAsync({ useProxy: true, showInRecents: true })}
        />
      ) : null}
      {isSignIn ? <Button title="Logout" onPress={logout} /> : undefined}
      <StatusBar barStyle="light-content" />
    </Wrapper>
  );
}
