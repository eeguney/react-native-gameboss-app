import { StatusBar } from "react-native";
import React from "react";
import NotificationList from "../components/NotificationList/NotificationList";
import Wrapper from "../components/Wrapper";
import NOTIFICATION from "../dummydatas/notification";

export default function NotificationScreen({ navigation }) {
  return (
    <Wrapper>
      <NotificationList
        data={NOTIFICATION}
        label="Bildirimler"
      />
      <StatusBar barStyle={"light-content"} />
    </Wrapper>
  );
}
