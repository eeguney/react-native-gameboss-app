import { View, Text, Image, Dimensions, Pressable } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import { SharedElement } from "react-navigation-shared-element";
import { useNavigation } from "@react-navigation/native";
import CardWithTooltip from "./CardWithTooltip";

const SCREEN = Dimensions.get("screen").width;
const CONTAINERMARGIN = 32;
const MARGINAROUNDCARD = 12;
const CARDWIDTH = (SCREEN - CONTAINERMARGIN - MARGINAROUNDCARD) / 2;
const CARDHEIGHT = ((SCREEN - CONTAINERMARGIN - MARGINAROUNDCARD) / 2) * 0.58;

export default function Card2({ item, noMargin }) {
  const navigation = useNavigation();
  return (
      <CardWithTooltip onPress={() =>
        navigation.push("SingleLive", {
          item,
        })}>
        <View
          style={{ width: CARDWIDTH }}
          className={`mb-4 ${!noMargin && "mr-3"}`}
        >
          <SharedElement id={`item.${item.id}.id`}>
            <Image
              source={{ uri: item.thumbnail }}
              style={{ width: CARDWIDTH, height: CARDHEIGHT }}
              className="rounded"
              resizeMode="contain"
            />
          </SharedElement>

          <Text className="text-white mt-1 font-semibold text-xs">
            {item.title}
          </Text>
          {item.date == "now" && (
            <View className="flex-row bg-[#00000090] absolute top-1 left-1 items-center p-1 rounded-full">
              <Animatable.View
                animation="fadeOut"
                duration={1000}
                delay={1000}
                direction="alternate"
                iterationCount="infinite"
                useNativeDriver={true}
                className={`
    
            bg-green-500 w-2 h-2 rounded-full`}
              />
            </View>
          )}
          {item.date != "now" && (
            <Text
              className={`text-neutral-500 mt-[1px] text-[10px] self-start`}
            >
              {item.date}
            </Text>
          )}
        </View>
      </CardWithTooltip>
  );
}
