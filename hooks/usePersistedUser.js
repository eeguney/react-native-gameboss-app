import AsyncStorage from "@react-native-async-storage/async-storage";
import * as AuthSession from 'expo-auth-session';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, setAuth } from "../store/appSettingsSlice";

export default function usePersistedUser() {
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth)
  const [authState, setAuthState] = useState();
  const [requireRefresh, setRequireRefresh] = useState(false);

  useEffect(() => {
    const getPersistedAuth = async () => {
      const jsonValue = await AsyncStorage.getItem("auth");

      if (jsonValue != null) {
        const authFromJson = JSON.parse(jsonValue);
        setAuthState(authFromJson);
        const tokenData = {
          expiresIn: authFromJson.expiresIn,
          issuedAt: authFromJson.issuedAt,
        };
        setRequireRefresh(!AuthSession.TokenResponse.isTokenFresh(tokenData));
      }
    };
    getPersistedAuth();
  }, []);

  const handleAuth = async (data) => {
    setAuthState(data);
    await AsyncStorage.setItem("auth", data);
  }

  return { auth: authState, handleAuth, requireRefresh, setRequireRefresh };
}
