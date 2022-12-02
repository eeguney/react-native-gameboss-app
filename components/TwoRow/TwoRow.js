import { View, Text } from "react-native";
import React from "react";
import Label1 from "../UI/Label/Label1";
import Card2 from "../UI/Cards/Card2";

export default function TwoRow({ label, data, ...props }) {
  return (
    <View className="px-4 mt-2 w-full" {...props}>
      {label && <Label1 className="mb-3">{label}</Label1>}
      <View className="flex-row flex-wrap">
        {data.map((item, index) => (
          <Card2 key={item.id} item={item} noMargin={index % 2 == 1} />
        ))}
       
      </View>
    </View>
  );
}
