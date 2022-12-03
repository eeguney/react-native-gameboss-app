import { View, TextInput, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function CommentBottomSheetInput() {
  return (
    <View className="px-2 mb-6 relative">
      <TextInput
        placeholder="Your comment..."
        placeholderTextColor="white"
        className="text-white text-xs py-2 px-4 bg-[#222] rounded-md"
      />
      <Pressable className="absolute right-0 top-0 h-full justify-center px-6">
        <FontAwesome name="send" size={17} color="#3b84f6" />
      </Pressable>
    </View>
  );
}
