import { View, Text, FlatList } from "react-native";
import React from "react";
import Label1 from "../UI/Label/Label1";
import Card4 from "../UI/Cards/Card4";

const render = ({ item }) => <Card4 item={item} />;

export default function FullWidthSection({ label, data }) {
  return (
    <View className="px-4 mt-2 w-full">
      {label && <Label1 className="mb-3">{label}</Label1>}
      <FlatList
        renderItem={render}
        keyExtractor={(item) => item.id}
        data={data}
      />
    </View>
  );
}
