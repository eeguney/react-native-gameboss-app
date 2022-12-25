import { View, Text } from 'react-native'
import React from 'react'

export default function Error({ message }) {
  return (
    <View className="flex-1 w-full p-2 pb-12 items-center justify-center flex-col">
      <Text className="w-full text-center text-2xl mb-2">🥺</Text>
      <Text className="w-full text-white text-center">{message}!</Text>
    </View>
  )
}