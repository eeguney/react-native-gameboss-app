import { View, Text } from "react-native";
import React from "react";
import Label1 from "../UI/Label/Label1";

export default function DrawerList({ label, data, props }) {
  return (
    <View className={`my-3`} {...props}>
      {label && (
        <View className="flex-row flex-1 justify-between items-center mb-2">
          <Label1>{label}</Label1>
          <Text className="font-bold text-white text-xs">Tümünü gör</Text>
        </View>
      )}
      {data.map((item, index) => (
        <Text className="text-base text-white font-semibold my-[3px]" key={index}>
          {item.title}
        </Text>
      ))}
    </View>
  );
}
