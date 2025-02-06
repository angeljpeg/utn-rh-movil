import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import CostumDrawerContent from "@/components/Drawer/CostumDrawerContent";
import {
  Poppins_400Regular,
  useFonts,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";

// Import your global CSS file
import "../global.css";
import LeftComponent from "@/components/Drawer/LeftComponent";

import { StatusBar } from "react-native";

export default function Layout() {
  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_300Light,
  });
  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerPosition: "left",
          drawerActiveTintColor: "#15803d",
          drawerInactiveTintColor: "#262626",
          drawerStatusBarAnimation: "fade",
          /* overlayColor: "#000", */
          drawerType: "front",
          drawerLabelStyle: {
            fontFamily: "Poppins_400Regular",
            fontSize: 14,
            fontWeight: "300",
          },
          headerTitleStyle: { fontFamily: "Poppins_300Light", fontSize: 20 },
          headerTitleAlign: "left",
          headerLeft: () => <LeftComponent />,
          headerStyle: {
            elevation: 0, // Para Android, quita la sombra
            shadowOpacity: 0, // Para iOS, quita la sombra
            borderBottomWidth: 1,
            borderBottomColor: "#e5e5e5",
            backgroundColor: "#ffffff",
          },
        }}
        drawerContent={CostumDrawerContent}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Login",
            drawerStyle: { display: "none" },
            headerShown: false,
            headerStyle: {
              backgroundColor: "#000",
            },
            drawerItemStyle: { display: "none" },
            title: "Login",
            drawerIcon: ({ size, color }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="+not-found"
          options={{
            drawerLabel: "Not Found Page",
            drawerStyle: { display: "none" },
            headerShown: false,
            drawerItemStyle: { display: "none" },
            title: "Not Found Page",
            drawerIcon: ({ size, color }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="cuenta"
          options={{
            drawerLabel: "Mi cuenta",
            drawerItemStyle: { display: "none" },
            title: "Mi cuenta",
            drawerIcon: ({ size, color }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="inicio"
          options={{
            drawerLabel: "Inicio",
            title: "Inicio",
            drawerIcon: ({ size, color }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="calendar"
          options={{
            drawerLabel: "Calendario",
            title: "Calendario",
            drawerIcon: ({ size, color }) => (
              <AntDesign name="calendar" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="prestaciones"
          options={{
            drawerLabel: "Mis prestaciones",
            title: "Mis prestaciones",
            drawerIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="hand-extended-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Drawer>
      <StatusBar backgroundColor="#fafafa" barStyle="dark-content" />
    </GestureHandlerRootView>
  );
}
