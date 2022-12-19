import {
  selectAccessToken,
  selectIsSignIn,
  selectRefreshRequired,
  selectRefreshToken,
  setAccessToken,
  setAuthenticatedUser,
  setIsSignIn,
  setRefreshRequired,
  setRefreshToken,
} from "../store/appSettingsSlice";
import { useEffect } from "react";
import * as AuthSession from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import ENV_CONFIG from "../constants/env_config";

const AuthenticationProvider = ({ children }) => {
  const accessToken = useSelector(selectAccessToken);
  const refreshToken = useSelector(selectRefreshToken);
  const isSignIn = useSelector(selectIsSignIn);
  const isRequiredRefresh = useSelector(selectRefreshRequired);

  const dispatch = useDispatch();

  async function checkAuth() {
    const access = await AsyncStorage.getItem("accessToken");
    if (access) {
      dispatch(setAccessToken(access));
      dispatch(setIsSignIn(true));
    } else {
      dispatch(setAccessToken(null));
      dispatch(setRefreshToken(null));
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  const checkRequireRefresh = async () => {
    const authFromJson = await AsyncStorage.getItem("auth");
    if(authFromJson) {
      const isRefreshRequired = !AuthSession.TokenResponse.isTokenFresh({
        expiresIn: authFromJson.expiresIn,
        issuedAt: authFromJson.issuedAt,
      });
      dispatch(setRefreshRequired(isRefreshRequired))
    }
  };

  useEffect(() => {
    checkRequireRefresh();
  }, []);

  const refreshingToken = async () => {
    const tokenResult = await AuthSession.refreshAsync(
      {
        clientId:
          ENV_CONFIG.ANDROID_CLIENT,
        refreshToken: JSON.stringify(refreshToken),
      },
      {
        tokenEndpoint: ENV_CONFIG.REFRESH_TOKEN_ENDPOINT,
      }
    );
    dispatch(setAccessToken(tokenResult.accessToken));
    await AsyncStorage.setItem(
      "accessToken",
      JSON.stringify(tokenResult.accessToken)
    );
    dispatch(selectRefreshRequired(false));
  };

  const getUserData = async (token) => {
    const userInfoResponse = await fetch(
      ENV_CONFIG.USERINFO_ENDPOINT,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const userData = await userInfoResponse.json();

    return userData;
  };

  async function setAuthenticatedUserToStore() {
    let userData = await AsyncStorage.getItem("userData");
    userData = JSON.parse(userData);
    if (userData) {
      dispatch(setAuthenticatedUser(userData));
    } else {
      let user = await getUserData(accessToken);
      await AsyncStorage.setItem("userData", JSON.stringify(user));
      dispatch(setAuthenticatedUser(user));
    }
  }

  useEffect(() => {
    if (isSignIn) {
      setAuthenticatedUserToStore();
    }
  }, [isSignIn]);

  if (isRequiredRefresh) {
    refreshingToken();
  }

  
  return <>{children}</>;
};

export default AuthenticationProvider;
