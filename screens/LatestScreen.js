import { StatusBar, ScrollView, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Wrapper from "../components/Wrapper";
import FullWidthSlider from "../components/FullWidthSlider/FullWidthSlider";
import TwoRow from "../components/TwoRow/TwoRow";
import TOURNAMENTS from "../dummydatas/tournaments";

export default function LatestScreen({ navigation }) {
  return (
      <Wrapper>
        <FullWidthSlider label="Akış" />
        <TwoRow
          className="mt-6"
          data={TOURNAMENTS}
        />
      <StatusBar barStyle={"light-content"} />
      </Wrapper>
  );
}
