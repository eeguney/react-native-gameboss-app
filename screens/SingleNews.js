import { StatusBar, Image, Dimensions, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import Wrapper from "../components/Wrapper";
import { SharedElement } from "react-navigation-shared-element";
import CommentBottomSheet from "../components/CommentBottomSheet/CommentBottomSheet";
import RenderHtml from "react-native-render-html";
import {decode} from 'html-entities';

const SCREEN = Dimensions.get("screen").width;

export default function SingleNews({ route, navigation }) {
  const { item } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Haber",
    });
  }, []);

  return (
    <>
      <Wrapper noActivity>
        <SharedElement id={`item.${item.id}.id`}>
          <Image
            source={{ uri: item.thumbnail}}
            style={{
              width: SCREEN,
              height: SCREEN * 0.575,
            }}
            resizeMode="stretch"
          />
        </SharedElement>
        <View className="py-3 px-4">
          <Text className="text-white text-xl leading-7 font-bold">
            {item.title}
          </Text>
          <RenderHtml
            source={{
              html: decode(item.text)
            }}
            tagsStyles={{
              p: {
                padding: 0,
                marginVertical: 10,
              },
            }}
            contentWidth={SCREEN}
          />
        </View>
        <StatusBar barStyle={"light-content"} />
      </Wrapper>
      <CommentBottomSheet />
    </>
  );
}
