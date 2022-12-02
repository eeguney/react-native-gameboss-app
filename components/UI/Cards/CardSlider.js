import { View, Text, Image, Dimensions, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";
const SCREEN = Dimensions.get("screen").width;

const CONTAINERMARGIN = 32;

export default function CardSlider({ item }) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.push("SingleLive", {
          item
        })
      }
    >
      <View
        style={{ width: SCREEN - CONTAINERMARGIN }}
        className="overflow-hidden relative"
      >
        <SharedElement id={`item.${item.uniqueId}.id`}>
          <Image
            source={item.img}
            style={{
              width: SCREEN - CONTAINERMARGIN,
              height: (SCREEN - CONTAINERMARGIN) * 0.575,
            }}
          className="rounded"
            resizeMode="contain"
          />
        </SharedElement>
        <View className="absolute bottom-5 left-2">
          <Text className="text-white rounded-md z-10 py-2 px-2 font-bold text-[13px] bg-[#020AB8]">
            {item.title}
          </Text>
          <Text className="text-black -mt-1 ml-1 rounded-md font-semibold bg-[#fff] text-[10px] px-2 py-1 self-start">
          {item.category}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
