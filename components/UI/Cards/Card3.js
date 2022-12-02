import { View, Image, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";
import CardWithTooltip from "./CardWithTooltip";

const SCREEN = Dimensions.get("screen").width;
const CONTAINERMARGIN = 32;
const CARDWIDTH = (SCREEN - CONTAINERMARGIN) / 2;
const CARDHEIGHT = CARDWIDTH * 0.58;

export default function Card3({ item }) {
  const navigation = useNavigation();

  return (
    <CardWithTooltip onPress={() =>
      navigation.push("SingleLive", {
        item,
      })}>
      <View style={{ width: CARDWIDTH }} className={`mb-4`}>
        <SharedElement id={`item.${item.uniqueId}.id`}>
          <Image
            source={item.img}
            style={{ width: CARDWIDTH, height: CARDHEIGHT }}
            className="rounded"
            resizeMode="contain"
          />
        </SharedElement>
      </View>
    </CardWithTooltip>
  );
}
