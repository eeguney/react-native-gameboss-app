import { StatusBar, Image, Dimensions, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import Wrapper from "../components/Wrapper";
import { SharedElement } from "react-navigation-shared-element";
import CommentBottomSheet from "../components/CommentBottomSheet/CommentBottomSheet";
import RenderHtml from "react-native-render-html";

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
          <Text className="text-white text-xl leading-7 font-bold">
            {item.title}
          </Text>
          <RenderHtml
            source={{
              html: `<div style="color: white">
              <p style="font-weight: 600">Former Gaimin Gladiators’ midlaner, BOOM enters the arena.
              Team Secret Dota 2 roster for 2022/2023 DPC is now complete.</p>
              <p>A new era begins. Western European powerhouse, Team Secret finalizes its Dota 2 roster 
              for the upcoming Dota Pro Circuit (DPC) season with the addition of Miroslav “BOOM” Bičan.
              The former Gaimin Gladiators’ midlaner will fill in the shoes of Secret’s former midlaner, Michał “Nisha” Jankowski.
              </p>
              <p>Here is Team Secret’s Dota 2 roster for the upcoming season:</p>
              <li>- Remco “Crystallis” Arets</li>
              <li>- Miroslav “BOOM” Bičan</li>
              <li>- Roman “Resolut1on” Fomynok</li>
              <li>- Baqyt “Zayac” Emiljanov</li>
              <p>Team Secret has been teasing the community with a slow roster reveal. In a couple of days, it unveiled the same
              lineup up until the departure of Nisha – which shook the Dota 2 community. To fill in the massive void left by Nisha,
              Team Secret picked up young Czech player, BOOM.
              </p>
              <p>“Boom is a skilled midlaner that has progressed year after year,” said Puppey, the captain of Team Secret. 
              “Talking to him was a pleasant and confidence assuring experience. He is young, hungry, talented and I think he
              will be a great fit to the team.”</p>
              </div>`,
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
