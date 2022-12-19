import {
  View,
  InteractionManager,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import VirtualizedView from "./VirtualizedView/VirtualizedView";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../store/appSettingsSlice";

export default function Wrapper({ noActivity, children }) {
  const [loading, setloading] = useState(false);

  const isDarkMode = useSelector(selectDarkMode);


  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setTimeout(() => {
        setloading(true);
      }, 1000);
    });
  }, []);

  if (!noActivity && !loading) {
    return (
      <ActivityIndicator
        className="flex-1 items-center pb-16"
        color="#FFE600"
        size="large"
      />
    );
  }
  return (
    <SafeAreaView className={`flex-1  ${isDarkMode ? "bg-black" : "bg-white"}`}>
      <VirtualizedView>
        <View className="pb-16">{children}</View>
      </VirtualizedView>
    </SafeAreaView>
  );
}
