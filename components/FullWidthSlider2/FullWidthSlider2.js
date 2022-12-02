import { View, Dimensions } from "react-native";
import React from "react";
import Label1 from "../UI/Label/Label1";
import CardSlider from "../UI/Cards/CardSlider";
import Carousel from "react-native-reanimated-carousel";

const render = ({item}) => (<CardSlider item={item} />)

const SCREEN = Dimensions.get("screen").width;
const CONTAINERMARGIN = 32;


export default function FullWidthSlider2({ label, parallax, data, ...props }) {
  return (
    <View className="px-4 w-full" {...props}>
      <Label1 className="mb-3">{label}</Label1>
      <Carousel
        autoPlayInterval={4000}
        mode={parallax ? "parallax" : null}
        loop
        width={SCREEN - CONTAINERMARGIN}
        height={(SCREEN - CONTAINERMARGIN) * 0.575}
        autoPlay={true}
        renderItem={render}
        data={data}
      />
    </View>
  );
}
