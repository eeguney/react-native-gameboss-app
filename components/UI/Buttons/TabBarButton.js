import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Entypo from "@expo/vector-icons/Entypo";

export default function TabBarButton({ icon, active, size, ...props }) {
  return (
    <Pressable className="relative p-4" {...props} android_ripple={{ borderless: false, color: "#222" }}>
      <Entypo name={icon} size={size ?? 30} color={active ? "#FFE600" : "#FFFFFF"} />
      {
        active &&
        <View className="absolute bottom-0 left-0 right-0 items-center">
          <View className="w-[6px] h-[6px] rounded-full bg-[#FFE600]"></View>
        </View>
      }
    </Pressable>
  )
}