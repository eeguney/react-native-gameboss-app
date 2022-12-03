import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import Label1 from "../UI/Label/Label1";
import Card4 from "../UI/Cards/Card4";

const render = ({ item }) => <Card4 item={item} />;

export default function FullWidthSection({ label, data }) {
  const [fetchingMore, setFetchingMore] = useState(false);
  const [numToRender, setNumToRender] = useState(5);

  const loadMoreData = () => {
    setFetchingMore(true);
    setTimeout(() => {
      setNumToRender((lastPosition) => lastPosition + 5);
      setFetchingMore(false);
    }, 2000);
  }

  return (
    <View className="px-4 mt-2 w-full">
      {label && <Label1 className="mb-3">{label}</Label1>}
      <FlatList
        renderItem={render}
        keyExtractor={(item) => item.id}
        data={data.slice(0, numToRender - 1)}
        ListFooterComponent={
          <ActivityIndicator
            className={`pb-4 ${!fetchingMore && "opacity-0"}`}
            size="large"
          />
        }
        initialNumToRender={5}
        onEndReached={({ distanceFromEnd }) => loadMoreData()}
      />
    </View>
  );
}
