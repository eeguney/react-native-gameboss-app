import { StatusBar, ScrollView, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import Buttons from "../components/UI/Buttons";

export default function SettingsScreen({ navigation }) {


  return (
    <SafeAreaView className="flex-1 bg-black">
      
      <StatusBar barStyle={"light-content"} />
    </SafeAreaView>
  );
}
