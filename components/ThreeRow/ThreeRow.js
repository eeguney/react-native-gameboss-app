import { View, Text } from "react-native";
import React from "react";
import Label1 from "../UI/Label/Label1";
import CardSmallBox from "../UI/Cards/CardSmallBox";

export default function ThreeRow({ label, data, ...props }) {
  return (
    <View className="px-4 mt-2 w-full" {...props}>
      {label && <Label1 className="mb-3">{label}</Label1>}
      <View className="flex-row flex-wrap">
        {data.map((item, index) => (
          <CardSmallBox key={item.id} item={item} noMargin={index % 4 == 3} />
        ))}
       
      </View>
    </View>
  );
}
