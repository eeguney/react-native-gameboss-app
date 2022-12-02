import { FlatList, RefreshControl } from "react-native";
import React, { useState } from "react";

export default function VirtualizedView({ children }) {
  const [refreshing, setRefreshing] = useState(false);

  return (
    <FlatList
      data={[]}
      ListEmptyComponent={null}
      renderItem={null}
      keyExtractor={(i) => i}
      ListHeaderComponent={() => <>{children}</>}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => setRefreshing(true)}
        />
      }
    />
  );
}
