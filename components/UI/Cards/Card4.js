import { View, Text, Image, Dimensions, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";
import CardWithTooltip from "./CardWithTooltip";

const SCREEN = Dimensions.get("screen").width;
const CONTAINERMARGIN = 32;
const MARGINAROUNDCARD = 12;
const CARDWIDTH = (SCREEN - CONTAINERMARGIN - MARGINAROUNDCARD) / 2 - 20;
const CARDHEIGHT = CARDWIDTH * 0.58;

export default function Card4({ item }) {
  const navigation = useNavigation();
  return (
    <CardWithTooltip onPress={() =>
      navigation.push("SingleNews", {
        item,
      })}>
      <View
        style={{ width: CARDWIDTH }}
        className={`mb-4 flex-row items-center`}
      >
        <SharedElement id={`item.${item.uniqueId}.id`}>
          <Image
            source={item.img}
            style={{ width: CARDWIDTH, height: CARDHEIGHT }}
            className="mr-3 rounded"
            resizeMode="contain"
          />
        </SharedElement>

        <View>
          <Text className="text-white my-1 text-sm font-semibold leading-4">
            {item.title.slice(0,60)}{item.title.length > 60 && "..."}
          </Text>
          <Text
            className={`mt-1 text-white font-semibold rounded-sm bg-[#020AB8] px-2 py-1 text-[10px] self-start`}
          >
            {item.category}
          </Text>
        </View>
      </View>
    </CardWithTooltip>
  );
}
