import { View, Text, FlatList } from "react-native";
import React from "react";
import Label1 from "../UI/Label/Label1";
import NotificationCard from "../UI/Cards/NotificationCard";

const render = ({ item }) => <NotificationCard item={item} />;

export default function NotificationList({ data, label }) {
  return (
    <View className="px-4 mb-16 w-full">
      <View className="flex-row items-center mb-3">
        {label && <Label1 className="mr-2">{label}</Label1>}
        <Text className="text-[#FFE600] text-[10px]">
          {data.filter((notification) => notification.active).length} yeni
          bildirim
        </Text>
      </View>
      <FlatList
        renderItem={render}
        keyExtractor={(item) => item.id}
        data={data}
      />
    </View>
  );
}
