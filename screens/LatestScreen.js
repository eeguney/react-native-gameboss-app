import { StatusBar } from "react-native";
import React, { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import FullWidthSlider from "../components/FullWidthSlider/FullWidthSlider";
import TwoRow from "../components/TwoRow/TwoRow";
import useFetch from "../hooks/useFetch";
import ENV_CONFIG from "../constants/env_config";

export default function LatestScreen({ navigation }) {

  const tournament = useFetch(ENV_CONFIG.API.TOURNAMENTS);

  useEffect(() => {
    tournament.fetch();
  }, []);
  return (
      <Wrapper>
        <FullWidthSlider label="Akış" />
        <TwoRow
          className="mt-6"
          data={tournament.data}
        />
      <StatusBar barStyle={"light-content"} />
      </Wrapper>
  );
}
