import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Drawer from "./drawer/Drawer";
import SingleLive from "./screens/SingleLive";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import SingleNews from "./screens/SingleNews";
import { Provider } from "react-redux";
import { store } from "./store/store";
import LoginScreen from "./screens/LoginScreen";
import AuthenticationProvider from "./utils/AuthenticationProvider";

const CustomDarkMode = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#000",
    text: "white",
  },
};

const CustomLightMode = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

export default function App() {
  // theming
  const isDarkMode = store.getState().appSettings.darkMode;
  const theme = isDarkMode ? CustomDarkMode : CustomLightMode;

  // stack
  const Stack = createSharedElementStackNavigator();

  return (
    <Provider store={store}>
      <AuthenticationProvider>
        <NavigationContainer theme={theme}>
          <TailwindProvider>
            <Stack.Navigator initialRouteName={"Root"} mode="modal">
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="SingleLive"
                component={SingleLive}
                sharedElements={(route, otherRoute, showing) => {
                  const { item } = route.params;
                  return [{ id: `item.${item.id}.id` }];
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
                  return [{ id: `item.${item.id}.id` }];
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
      </AuthenticationProvider>
    </Provider>
  );
}
