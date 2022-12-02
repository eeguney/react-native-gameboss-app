import { StatusBar, Image, Dimensions, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import Wrapper from "../components/Wrapper";
import { SharedElement } from "react-navigation-shared-element";
import CommentBottomSheet from "../components/CommentBottomSheet/CommentBottomSheet";

const SCREEN = Dimensions.get("screen").width;

export default function SingleLive({ route, navigation }) {
  const { item } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: item.title,
    });
  }, []);


  return (
    <>
      <Wrapper noActivity>
        <SharedElement id={`item.${item.uniqueId}.id`}>
          <Image
            source={item.img}
            style={{
              width: SCREEN,
              height: SCREEN * 0.575,
            }}
            resizeMode="stretch"
          />
        </SharedElement>
        <View className="py-3 px-4">
          <Text className="text-white font-bold">{item.title}</Text>
        </View>
        <StatusBar barStyle={"light-content"} />
      </Wrapper>
      <CommentBottomSheet />
    </>
  );
}
