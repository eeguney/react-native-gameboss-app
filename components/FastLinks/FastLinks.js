import { View, Text, ScrollView } from "react-native";
import React from "react";
import Label1 from "../UI/Label/Label1";
import Buttons from "../UI/Buttons";

export default function FastLinks() {
    
  return (
    <View className="my-4">
      <Label1 className="mb-3 ml-4">Hızlı Erişim</Label1>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginLeft: 16, paddingRight: 18 }}
      >
        <Buttons.FastLinkButton
          title="Valorant"
          img={require("../../assets/icons/valorant.png")}
          playingCount={5}
          color="#FF4655"
        />
        <Buttons.FastLinkButton
          title="CSGO"
          img={require("../../assets/icons/csgo.png")}
          playingCount={5}
          color="#523AD8"
        />
        <Buttons.FastLinkButton
          title="League of Legends"
          img={require("../../assets/icons/lol.png")}
          playingCount={5}
          color="#148BA5"
        />
      </ScrollView>
    </View>
  );
}
