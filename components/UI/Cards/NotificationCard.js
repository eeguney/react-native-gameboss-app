import { View, Text, Image, Dimensions, Pressable } from "react-native";
import React, { useCallback, useState } from "react";
import { SharedElement } from "react-navigation-shared-element";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const SCREEN = Dimensions.get("screen").width;
const CONTAINERMARGIN = 32;
const MARGINAROUNDCARD = 12;
const CARDWIDTH = SCREEN - CONTAINERMARGIN - MARGINAROUNDCARD;
const CARDHEIGHT = CARDWIDTH * 0.58;

export default function NotificationCard({ item }) {
  const navigation = useNavigation();
  const [active, setactive] = useState(item.active);

  function notificationText() {
    return item.notificationType == "EVENT_STARTED_FROM_YOUR_LIST"
      ? "İzleme listendeki bir oyun başladı"
      : item.notificationType == "EVENT_STARTED_FROM_YOUR_TEAMS"
      ? "Takip ettiğin bir takımının oyunu başladı"
      : item.notificationType == "EVENT_STARTED_FROM_YOUR_PLAYERS"
      ? "Takip ettiğin bir oyuncunun oyunu başladı"
      : "";
  }

  return (
    <View className={`flex-1 mb-4 flex-row items-center`}>
      <View className="mr-3">
        <Pressable onPress={() => setactive(!active)}>
          <Ionicons
            name={`${
              !active ? "checkmark-circle-sharp" : "checkmark-circle-outline"
            }`}
            size={20}
            color="white"
          />
        </Pressable>
      </View>
      <Pressable
        onPress={() =>
          navigation.push("SingleLive", {
            item,
          })
        }
        className={`flex-row flex-1 ${!active && "opacity-70"}`}
      >
        <SharedElement
          id={`item.${item.id}.image`}
          style={{ width: CARDWIDTH / 3 }}
          className="mr-2"
        >
          <Image
            source={item.img}
            style={{ width: "100%", height: CARDHEIGHT / 3 }}
            resizeMode="contain"
            className="rounded"
          />
        </SharedElement>
        <View className="flex-1">
          <Text className={`text-[#FFE600] text-[10px] self-start`}>
            {notificationText()}
          </Text>
          <Text className="text-white my-1 text-sm font-semibold leading-4 flex-wrap">
            {item.title}
          </Text>
          <Text className={`text-[#A0A0A0] text-[10px] self-start`}>
            {item.date}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
