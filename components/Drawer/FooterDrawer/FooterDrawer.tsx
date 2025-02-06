import { Pressable, Text, View } from "react-native";
import { Poppins_400Regular, useFonts } from "@expo-google-fonts/poppins";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { FooterDrawerModal } from "./FooterDrawerModal";
import { useModalDrawer } from "@/stores/modal-drawer-store";
import { useDrawerStatus } from '@react-navigation/drawer';
import { useEffect } from 'react'
import { useUserStore } from "@/stores/user-store";
import { Platform } from "react-native";

function obtenerIniciales(nombreCompleto: string | undefined) {
  if(nombreCompleto === undefined) {
    return "ND"
  }
  
  const palabras = nombreCompleto.trim().split(" "); // Separar por espacios
  if (palabras.length < 2) return palabras[0].slice(0, 2).toUpperCase(); // Si solo hay un nombre

  return (palabras[0][0] + palabras[1][0]).toUpperCase(); // Primera letra de nombre + primera de apellido
}

export function FooterDrawer() {
  const { isActivated, setModal } = useModalDrawer();
  const { user, token } = useUserStore();
  const isDrawerOpen = useDrawerStatus() === 'open';
  const bottomPadding = Platform.OS === "ios" ? "" : "pb-4"

  useEffect(() => {
    if(isDrawerOpen) {
      if(isActivated) {
        setModal(false)
      }
    }
  }, [isDrawerOpen])

  const [loaded, error] = useFonts({
    Poppins_400Regular,
  });
  if (!loaded && !error) {
    return null;
  }

  return (
    <View className={`flex-row justify-between px-4 pt-4 ${ bottomPadding }`}>
      <View className="flex-row items-center">
        <View className="self-start p-3 bg-green-600 rounded-xl">
          <Text
            className="text-2xl font-bold color-white"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            { obtenerIniciales(user?.nombre) }  
          </Text>
        </View>
        <View className="ml-2">
          <Text
            className="text-lg"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            { user?.nombre }
          </Text>
          <Text
            className="text-xs color-neutral-500"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            pirita@gmail.com
          </Text>
        </View>
      </View>
      <View className="justify-center">
        <Pressable
          onPress={() => setModal(!isActivated)}
          className="p-2 ml-2 rounded-lg active:bg-neutral-200"
        >
          {({ pressed }) => (
            <SimpleLineIcons
              name="options-vertical"
              size={20}
              color={pressed ? "#039357" : "black"}
            />
          )}
        </Pressable>
      </View>
      {isActivated && <FooterDrawerModal />}
    </View>
  );
}
