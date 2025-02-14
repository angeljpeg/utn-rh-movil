import { Text, View, TouchableOpacity } from "react-native";
import { DateDataType } from "../../../types/dateData";
import { Icons } from "../data/icons";

import {
  Poppins_400Regular,
  useFonts,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";

import { useModal } from "@/stores/modal-store";
import { ModalBodyDescansoInfo } from "@/pages/Calendar/components/Modal/Simbology/ModalBodyDescansoInfo";

export function ListComponent({
  solicitud_id,
  fechaInicio,
  fechaFinal,
  nombre_tipo,
  color,
  status,
}: DateDataType) {
  const { setModal } = useModal();

  const [anoInicio, mesInicio, diaInicio] = fechaInicio.split("-");
  const [anoFinal, mesFinal, diaFinal] = fechaFinal.split("-");

  const handlePress = () => {
    setModal(
      true,
      nombre_tipo,
      true,
      <ModalBodyDescansoInfo
        solicitud_id={solicitud_id}
        fechaInicio={fechaInicio}
        fechaFinal={fechaFinal}
        nombre_tipo={nombre_tipo}
        color={color}
        status={status}
      />,
      "Ver prestación",
      () => console.log("Clic en el botón del modal")
    );
  };

  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_300Light,
  });

  if (!loaded && !error) {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{ backgroundColor: color }}
      className="p-4 mx-4 mb-4 rounded-2xl"
      activeOpacity={0.7}
    >
      <View className="flex-row items-center justify-between mb-2">
        <Text
          style={{ fontFamily: "Poppins_300Light" }}
          className="text-2xl color-white"
        >
          {nombre_tipo}
        </Text>
        <Icons size={20} color={"#fff"} type={status} />
      </View>
      <Text
        className="color-white"
        style={{ fontFamily: "Poppins_400Regular" }}
      >
        {diaInicio}/{mesInicio}/{anoInicio} - {diaFinal}/{mesFinal}/{anoFinal}
      </Text>
    </TouchableOpacity>
  );
}
