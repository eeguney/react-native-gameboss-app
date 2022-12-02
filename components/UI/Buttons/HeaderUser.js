import { View, Text, Image } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";

export default function HeaderUser({ avatar }) {
  return (
    <View className="flex-row items-center gap-2">
      <Image source={avatar} className="w-9 h-9 bg-zinc-900 rounded-full" />
      <Ionicons name="caret-down-sharp" size={15} color="#666" />
    </View>
  )
}