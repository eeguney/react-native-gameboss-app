import {
  View,
  Text,
  InteractionManager,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import VirtualizedView from "./VirtualizedView/VirtualizedView";

export default function Wrapper({ noActivity, children }) {
  const [loading, setloading] = useState(false);

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
    <SafeAreaView className="flex-1 bg-black">
      <VirtualizedView>
        <View className="pb-16">{children}</View>
      </VirtualizedView>
    </SafeAreaView>
  );
}
