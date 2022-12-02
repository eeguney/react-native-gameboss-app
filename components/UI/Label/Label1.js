import { View, Text } from 'react-native'
import React from 'react'

export default function Label1({ children, ...props }) {
  return (
      <Text className="text-gray-700 font-semibold" {...props}>{children}</Text>
  )
}