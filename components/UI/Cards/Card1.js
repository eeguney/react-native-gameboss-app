import { View, Text, Image, Dimensions, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { SharedElement } from "react-navigation-shared-element";

const SCREEN = Dimensions.get("screen").width;
const CONTAINERMARGIN = 32;

export default function Card1({ item, fullWidth }) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.push("SingleLive", {
          item,
        })
      }
    >
      <View style={{ width: fullWidth ? SCREEN : SCREEN -  CONTAINERMARGIN}}>
        <SharedElement id={`item.${item.uniqueId}.id`}>
          <Image
            source={item.img}
            className="rounded-md"
            style={{
              width: fullWidth ? SCREEN : SCREEN -  CONTAINERMARGIN,
              height: (fullWidth ? SCREEN : SCREEN -  CONTAINERMARGIN) * 0.6,
            }}
            resizeMode="contain"
          />
        </SharedElement>

        <Text className="text-white my-2 mb-1 text-sm font-semibold">
          {item.title}
        </Text>
        {item.date == "now" && (
          <View className="flex-row absolute bg-[#00000090] top-2 left-2 items-center p-1.5 rounded-full">
            <Animatable.View
              animation="fadeOut"
              duration={1000}
              delay={1000}
              direction="alternate"
              iterationCount="infinite"
              useNativeDriver={true}
              className={`
    
            bg-green-500 w-[10px] h-[10px] rounded-full`}
            />
          </View>
        )}
        {item.date != "now" && (
          <Text className={`text-neutral-500 text-[11px] self-start`}>
            {item.date}
          </Text>
        )}
      </View>
    </Pressable>
  );
}
