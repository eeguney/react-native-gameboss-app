import { View, TextInput } from "react-native";
import React from "react";

export default function CommentBottomSheetInput() {
  return (
    <View className="px-2 mb-6">
      <TextInput
        placeholder="Your comment..."
        placeholderTextColor="white"
        className="text-white text-xs py-2 px-4 bg-[#222] rounded-md"
      />
    </View>
  );
}
