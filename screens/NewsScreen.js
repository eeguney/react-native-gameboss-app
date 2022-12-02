import { StatusBar, ScrollView } from "react-native";
import React from "react";
import FullWidthSlider2 from "../components/FullWidthSlider2/FullWidthSlider2";
import Wrapper from "../components/Wrapper";
import FullWidthSection from "../components/FullWidthSection/FullWidthSection";
import NEWS from "../dummydatas/news";

export default function NewsScreen({ navigation }) {
  return (
    <Wrapper>
      <FullWidthSlider2 className="mb-2" label="Haberler" data={NEWS} />
      <FullWidthSection data={NEWS} />
      <StatusBar barStyle={"light-content"} />
    </Wrapper>
  );
}
