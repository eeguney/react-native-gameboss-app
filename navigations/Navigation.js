import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View } from "react-native";
import Buttons from "../components/UI/Buttons";

export default function Navigation({ state, navigation }) {
  return (
    <View className="absolute bottom-0 w-full">
      <LinearGradient
        colors={["#00000008", "#00000060", "#000000"]}
        className="w-full h-full absolute top-0 left-0"
      />
      <View className="pt-1 pb-4 flex-row justify-around items-center">
        {state.routes.map((route, index) => {
          // if (
          //   route.name == CONSTANTS.navigation.SINGLEPROFILE ||
          //   route.name == CONSTANTS.navigation.PROFILE
          // )
          const label = route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          return (
            <View key={label} className="overflow-hidden rounded-full">
              {label === "HomeScreen" ? (
                <Buttons.TabBarButton
                  active={isFocused}
                  size={26}
                  icon="home"
                  style={{ marginTop: -1 }}
                  onPress={onPress}
                />
              ) : label === "LatestScreen" ? (
                <Buttons.TabBarButton
                  active={isFocused}
                  size={26}
                  icon="game-controller"
                  onPress={onPress}
                />
              ) : label === "NewsScreen" ? (
                <Buttons.TabBarButton
                  active={isFocused}
                  size={26}
                  icon="newsletter"
                  onPress={onPress}
                />
              ) : label === "NotificationScreen" ? (
                <Buttons.TabBarButton
                  active={isFocused}
                  size={24}
                  icon="bell"
                  onPress={onPress}
                />
              ) : label === "SettingsScreen" ? (
                <Buttons.TabBarButton
                  active={isFocused}
                  size={26}
                  icon="cog"
                  onPress={onPress}
                />
              ) : (
                <></>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}
