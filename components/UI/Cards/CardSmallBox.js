import { View, Text, Image, Dimensions, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";
import CardWithTooltip from "./CardWithTooltip";

const SCREEN = Dimensions.get("screen").width;
const CONTAINERMARGIN = 32;
const MARGINAROUNDCARD = 12;
const CARDWIDTH = (SCREEN - CONTAINERMARGIN - MARGINAROUNDCARD) / 4 - 6;

export default function Card4({ item, noMargin }) {
  const navigation = useNavigation();
  return (
    <CardWithTooltip onPress={() =>
      navigation.push("SingleNews", {
        item,
      })}>
      <View
        style={{ width: CARDWIDTH }}
        className={`mb-3 ${!noMargin && "mr-3"} flex-col items-center`}
      >
        <SharedElement id={`item.${item.id}.id`}>
          <Image
            source={{ uri: item.thumbnail }}
            style={{ width: CARDWIDTH, height: CARDWIDTH }}
            className="rounded-full bg-zinc-900"
            resizeMode="contain"
          />
        </SharedElement>

        <View>
          <Text className="text-white my-1 text-xs font-semibold leading-4">
            {item.name.slice(0,30)}{item.name.length > 30 && "..."}
            {noMargin && <Text className="text-white">nomarg</Text>}
          </Text>
        </View>
      </View>
    </CardWithTooltip>
  );
}
