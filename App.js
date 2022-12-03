import { TailwindProvider } from "tailwindcss-react-native";
import { DarkTheme, NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Drawer from "./drawer/Drawer";
import SingleLive from "./screens/SingleLive";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import SingleNews from "./screens/SingleNews";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#000'
  },
};



export default function App() {
  const Stack = createSharedElementStackNavigator();
  const scheme = useColorScheme();
  return (
    // <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
    <NavigationContainer theme={MyTheme}>
      <TailwindProvider>
        <Stack.Navigator
          initialRouteName="Root"
          mode="modal"
          // screenOptions={{cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid}}
        >
          <Stack.Screen
            name="SingleLive"
            component={SingleLive}
            sharedElements={(route, otherRoute, showing) => {
              const { item } = route.params;
              return [{ id: `item.${item.uniqueId}.id` }];
            }}
            options={{
              headerStyle: {
                backgroundColor: "black",
              },
              headerShadowVisible: false,
              headerTitleStyle: {
                fontSize: 14,
              },
              headerBackTitle: "Geri",
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="SingleNews"
            component={SingleNews}
            sharedElements={(route, otherRoute, showing) => {
              const { item } = route.params;
              return [{ id: `item.${item.uniqueId}.id` }];
            }}
            options={{
              headerStyle: {
                backgroundColor: "black",
              },
              
              headerTitleStyle: {
                fontSize: 14,
              },
              headerShadowVisible: false,
              headerBackTitle: "Geri",
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="Root"
            component={Drawer}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
