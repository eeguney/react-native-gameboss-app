import { View, Text, FlatList, Dimensions } from "react-native";
import React, { useRef } from "react";
import Card1 from "../UI/Cards/Card1";
import Label1 from "../UI/Label/Label1";
import Carousel from "react-native-reanimated-carousel";
import TOURNAMENTS from "../../dummydatas/tournaments";


const SCREEN = Dimensions.get("screen").width;
const CONTAINERMARGIN = 32;

export default function FullWidthSlider({ parallax, label }) {

  const render = ({ item }) => <Card1 fullWidth={parallax} key={item.id} item={item} />;

  return (
    <View className={`w-full ${!parallax && "mx-4"}`}>
      <Label1 className={`${parallax && "px-4"} mb-2`}>{label}</Label1>
      <Carousel
        autoPlayInterval={4000}
        mode={parallax ? "parallax" : null}
        loop
        width={parallax ? SCREEN : SCREEN - CONTAINERMARGIN}
        height={parallax ? SCREEN * 0.65 : SCREEN * 0.68}
        autoPlay={true}
        renderItem={render}
        data={TOURNAMENTS}
      />
    </View>
  );
}
