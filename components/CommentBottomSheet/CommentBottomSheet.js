import { View, Text } from "react-native";
import React, {  useMemo, useRef, useState } from "react";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import CommentCard from "../UI/Cards/CommentCard";
import CommentBottomSheetInput from "./CommentBottomSheetInput";

export default function CommentBottomSheet() {
  const bottomSheetRef = useRef(false);

  const snapPoints = useMemo(() => [60, "80%"], []);

  const render = ({ item }) => <CommentCard key={item.id} item={item} />;


  return (
    <BottomSheet
      handleIndicatorStyle={{ backgroundColor: "#ffffff20" }}
      backgroundStyle={{ backgroundColor: "#111111fa" }}
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
    >
      <View className="w-full flex-row justify-center mb-2 relative">
        <Text className="text-sm text-white font-bold pb-3">Yorumlar</Text>
      </View>

      <BottomSheetFlatList
        renderItem={render}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={CommentBottomSheetInput}
        data={[
          { id: 1, username: "Emre Güney", comment: "Bir comment..." },
          {
            id: 2,
            username: "Zehra Tandemir",
            comment: "Güzel comment...",
          },
          {
            id: 3,
            username: "Orhan Aydın",
            comment: "Vay be bir comment...",
          },
          {
            id: 4,
            username: "Süleyman Rasat",
            comment: "Hadi be comment...",
          },
          {
            id: 5,
            username: "Mustafa Demir",
            comment: "Yorum gibi comment...",
          },
          { id: 6, username: "Emre Güney", comment: "Bir comment..." },
          {
            id: 7,
            username: "Zehra Tandemir",
            comment: "Güzel comment...",
          },
          {
            id: 8,
            username: "Orhan Aydın",
            comment: "Vay be bir comment...",
          },
          {
            id: 9,
            username: "Süleyman Rasat",
            comment: "Hadi be comment...",
          },
          {
            id: 10,
            username: "Mustafa Demir",
            comment: "Yorum gibi comment...",
          },
        ]}
      />
    </BottomSheet>
  );
}
