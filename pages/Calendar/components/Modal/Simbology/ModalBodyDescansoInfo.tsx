import { Text, View } from "react-native";
import { DateDataType } from '../../../types/dateData'

import {
  Poppins_400Regular,
  useFonts,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";

export function ModalBodyDescansoInfo({
  solicitud_id,
  fechaInicio,
  fechaFinal,
  nombre_tipo,
  color,
  status,
}: DateDataType) {
  const [anoInicio, mesInicio, diaInicio] = fechaInicio.split("-");
  const [anoFinal, mesFinal, diaFinal] = fechaFinal.split("-");

  const [loaded, error] = useFonts({
    Poppins_400Regular,
  });

  if (!loaded && !error) {
    return null;
  }

  return (
    <View className="gap-2">
      <Text style={{ fontFamily: "Poppins_400Regular" }}>
        Estado: { status }
      </Text>
      <Text style={{ fontFamily: "Poppins_400Regular" }}>
        Fecha inicio: {diaInicio}/{mesInicio}/{anoInicio}
      </Text>
      <Text style={{ fontFamily: "Poppins_400Regular" }}>
        Fecha final: {diaFinal}/{mesFinal}/{anoFinal}
      </Text>
    </View>
  );
}
