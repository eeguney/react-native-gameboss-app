import {
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import SearchBox from "../components/SearchBox/SearchBox";
import Wrapper from "../components/Wrapper";
import FastLinks from "../components/FastLinks/FastLinks";
import FullWidthSlider from "../components/FullWidthSlider/FullWidthSlider";
import TwoRow from "../components/TwoRow/TwoRow";
import FullWidthSection from "../components/FullWidthSection/FullWidthSection";
import TOURNAMENTS from "../dummydatas/tournaments";
import NEWS from "../dummydatas/news";

export default function HomeScreen({ navigation }) {
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerTitle: "App",
  //     headerLeftContainerStyle: {
  //       marginLeft: 14,
  //     },
  //     headerRightContainerStyle: {
  //       marginRight: 14,
  //     },
  //     headerLeft: () => (
  //       <Pressable onPress={() => navigation.openDrawer()}>
  //         <Ionicons name="filter-sharp" size={25} color="white" />
  //       </Pressable>
  //     ),
  //     headerRight: () => (
  //       <Buttons.HeaderUser
  //         avatar={require("../assets/icons/userAvatar1.png")}
  //       />
  //     ),
  //   });
  // }, []);

  /* {refreshing ? <View className="absolute w-full h-full z-10 items-center justify-center bg-[#00000050]"><ActivityIndicator className="" size="large" color="red" /></View> : null} */

  return (
    <Wrapper>
      <SearchBox className="mt-2" />
      <FastLinks />
      <FullWidthSlider label="İzleme listendekiler" parallax />
      <TwoRow
        className="mt-4"
        label="Turnuvalar"
        data={TOURNAMENTS}
      />
      <FullWidthSection label="Haberler" data={NEWS} />
      <StatusBar barStyle={"light-content"} />
    </Wrapper>
  );
}
