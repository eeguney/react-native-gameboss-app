import { Pressable, Text, TouchableHighlight, View } from "react-native";
import React from "react";
import Tooltip from "rn-tooltip";

const CardTooltipMenu = () => {
  return (
    <View className="w-full flex-1">
      <Pressable
        className="flex-1 justify-center"
        android_ripple={{ color: "#ccc" }}
      >
        <Text className="font-semibold px-3 py-2">İzleme Listene Ekle</Text>
      </Pressable>
      <Pressable
        className="flex-1 justify-center"
        android_ripple={{ color: "#ccc" }}
      >
        <Text className="font-semibold px-3 py-2">Bildir</Text>
      </Pressable>
    </View>
  );
};

export default function CardWithTooltip({ children, onPress }) {
  return (
    <Tooltip
      popover={<CardTooltipMenu />}
      actionType="longPress"
      overlayColor="#00000060"
      containerStyle={{
        borderRadius: 5,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: 0,
      }}
      height={80}
      width={180}
      backgroundColor="white"
      toggleWrapperProps={{ onPress }}
    >
      {children}
    </Tooltip>
  );
}
