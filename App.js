import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Settings } from "react-native";
import { Calls, Home, Profile, SettingsScreen } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarShowLabel: false,
        tabBarStyle: { height: 60, borderColor: "#fff" },
      }}
    >
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Image source={require("./assets/images/icons/profile.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Calls",
          tabBarIcon: ({ color, size }) => (
            <Image source={require("./assets/images/icons/settingsicn.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Calls"
        component={Calls}
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Image source={require("./assets/images/icons/call.png")} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Image source={require("./assets/images/icons/message.png")} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
