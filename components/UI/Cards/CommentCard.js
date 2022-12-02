import { View, Text, Image } from 'react-native'
import React from 'react'

export default function CommentCard({ item }) {
  return (
    <View className="w-full mb-3 px-4 flex-row">
    <Image
      source={require("../../../assets/icons/userAvatar1.png")}
      className="w-10 h-10 rounded-full mr-3"
    />
    <View className="flex-1">
    <Text className="text-gray-300 text-[11px] mb-2">
        {item.username}
      </Text>
      <Text className="text-white text-xs p-3 bg-blue-600 rounded-md self-start">
        {item.comment}
      </Text>
      <Text className="text-gray-700 text-[10px] mt-1 text-right">
        2 saat önce
      </Text>
    </View>
  </View>
  )
}