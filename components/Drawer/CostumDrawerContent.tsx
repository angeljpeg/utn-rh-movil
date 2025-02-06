import { View, Text } from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

//Componentes del Drawer
import { FooterDrawer } from "./FooterDrawer/FooterDrawer";
import { TopDrawer } from "./TopDrawer";

import { useModalDrawer } from "@/stores/modal-drawer-store";
import { Platform } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

export default function CostumDrawerContent(props: any) {
  const { isActivated, setModal } = useModalDrawer();

  const isWeb = Platform.OS === "web" ? true : false;

  const insets = useSafeAreaInsets(); // Obtiene márgenes seguros en iOS
  const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight || 0 : insets.top;
  const bottomPadding = Platform.OS === "ios" ? insets.bottom : 0;

  return (
    <SafeAreaView className="flex-1 bg-white" style={{ paddingTop: statusBarHeight, paddingBottom: bottomPadding }}>
      <View
        className="flex-1 "
        onTouchEnd={() => {
          if (!isWeb) {
            if (isActivated) {
              setModal(false);
            }
          }
          /* console.log("Se tocó el Drawer"); */
        }}
      >
        <TopDrawer />

        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>

        <FooterDrawer />
      </View>
    </SafeAreaView>
  );
}
