import { View, Text } from "react-native";
import React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import SearchBox from "../SearchBox/SearchBox";
import DrawerList from "../DrawerList/DrawerList";

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View className="py-4 px-4 bg-[#000000ee]">
        <Text className="text-2xl font-bold text-neutral-700 mb-4">
          Game<Text className="text-[#FFE600]">Temple</Text>
        </Text>
        <SearchBox noMargin className="mb-4" />
        <DrawerList
          label="Kategoriler"
          data={[
            { title: "First Person Shooter (FPS)" },
            { title: "Strateji" },
            { title: "Spor" },
            { title: "Yarış" },
          ]}
        />
        <DrawerList
          label="Oyunlar"
          data={[
            { title: "Valorant" },
            { title: "Counter Strike Go" },
            { title: "League of Legends" },
            { title: "PUBG" },
            { title: "Fortnite" },
          ]}
        />
        <DrawerList
          data={[
            { title: "Ligler" },
            { title: "Takımlar" },
            { title: "Oyuncular" },
          ]}
        />
        <DrawerList
          label="Uygulama"
          data={[
            { title: "Hakkında" },
            { title: "Sponsorluk" },
            { title: "Bize ulaşın" },
          ]}
        />
      </View>
    </DrawerContentScrollView>
  );
}
