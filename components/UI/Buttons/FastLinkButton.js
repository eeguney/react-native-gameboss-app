import { View, Text, Pressable, Image } from "react-native";
import React from "react";

export default function FastLinkButton({ title, img, playingCount, color }) {
  return (
    <View style={{ overflow: "hidden", backgroundColor: 'black' }} className="rounded-lg mr-3">
      <Pressable
        android_ripple={{ color: color, borderless: true }}
        className={`bg-[#111] flex-row items-center px-3 py-3 rounded-lg`}
      >
        <Image source={img} className="mr-3 w-8 h-8 rounded-full" resizeMode="cover" />
        <View>
          <Text className="text-white font-bold text-xs">
            {title ?? "FastLinkButton"}
          </Text>
          <Text className="text-gray-500 text-[11px]">
            {playingCount ?? 0} maç oynanıyor
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
