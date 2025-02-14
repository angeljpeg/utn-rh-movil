import { Text, View, Pressable, SafeAreaView } from "react-native";
import { Link } from "expo-router";
import { BottomRightButton } from "@/components/BottomRightButton/BottomRightButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { InfoModal } from "@/stores/modal-store";
import { AddPrestacion } from "@/pages/Prestacion/components/Modal/ModalBodyAddPrestacion";
import { Modal } from "@/components/Modal/Modal";

/* <Link href={"/prestaciones/prestacionId/taquito"} asChild>
  <Pressable className="p-2 mt-2 rounded-lg bg-escuela">
    <Text className="color-white">Ir a la prestación: taquito</Text>
  </Pressable>
</Link> */

export default function Prestacion() {
  const infoModal: InfoModal = {
    isActivated: true,
    modalTitle: "Solicitar",
    modalBody: <AddPrestacion />,
    hasButtons: true,
    buttonTitle: "Solicitar",
    buttonAction: () => console.log("Solicitando prestacion..."),
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <BottomRightButton
        icon={<Ionicons name="add" size={35} color="#fff" />}
        arrayModal={infoModal}
      />
      <Modal />
    </SafeAreaView>
  );
}
