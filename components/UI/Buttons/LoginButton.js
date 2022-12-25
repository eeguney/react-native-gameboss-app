import { Text, Pressable, View } from "react-native";
import React from "react";

export default function LoginButton({ title, color, onPress, disabled }) {
  return (
    <View style={{ overflow: "hidden" }} className="rounded-lg">
      <Pressable
        android_ripple={{ color: "#fff", borderless: true }}
        className={`flex-row items-center justify-center px-3 py-3 rounded-lg`}
        style={{ backgroundColor: color ?? "#222" }}
        disabled={disabled}
        onPress={onPress}
      >
        <Text className="text-white font-bold text-sm">
          {title ?? "Login Button"}
        </Text>
      </Pressable>
    </View>
  );
}
