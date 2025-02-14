import { ScrollView, View, Text, SafeAreaView, Pressable } from "react-native";
import { Calendario } from "@/pages/Calendar/Calendario";
import { CheckSymbology } from "@/pages/Calendar/components/CheckSymbology";
import { Modal } from "@/components/Modal/Modal";
import { Lista } from "@/pages/Calendar/components/Lista/Lista";
import { BottomRightButton } from "@/components/BottomRightButton/BottomRightButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { InfoModal } from "@/stores/modal-store";
import { ModalBodySimbology } from "@/pages/Calendar/components/Modal/Simbology/ModalBodySimbology";

import {
  Poppins_400Regular,
  useFonts,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export default function CalendarioPage() {

  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  if (!loaded && !error) {
    return null;
  }

  const infoModal: InfoModal = {
    isActivated: true,
    modalTitle: "Simbología",
    hasButtons: false,
    modalBody: <ModalBodySimbology />,
    buttonTitle: "",
    buttonAction: () => {},
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* <CheckSymbology /> */}
      <BottomRightButton
        icon={<Ionicons name="information-outline" size={35} color="#fff" />}
        arrayModal={infoModal}
      />
      <View className="flex-none">
        <Calendario />
      </View>
      <Modal />
      <View className="z-10 flex-none">
        <Text
          className="ml-4 text-xl color-neutral-600"
          style={{ fontFamily: "Poppins_600SemiBold" }}
        >
          Descansos del mes
        </Text>
      </View>
      <View className="z-10 flex-none">
        <Lista />
      </View>
      <View className="z-10 flex-1">
        <Pressable className="p-4 mx-2 bg-neutral-200 active:bg-neutral-100 rounded-2xl">
          <Text
            className="text-xl color-neutral-600"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            Ver más
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
