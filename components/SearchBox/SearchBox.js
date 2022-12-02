import React from "react";
import { View, Text, TextInput } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

export default function SearchBox({ noMargin, className, ...props }) {
  return (
    <View className={`${!noMargin && "mx-4"} ${className} bg-neutral-900 rounded-md relative`} {...props}>
      <View className="absolute left-3 top-0 bottom-0 justify-center"><Entypo name="magnifying-glass" size={20} color="#999" /></View>
      <TextInput
        className="text-white py-3 px-4 pl-11"
        placeholder="Birşeyleri mi arıyorsun?"
        placeholderTextColor="#A0A0A0"
      />
    </View>
  );
}
