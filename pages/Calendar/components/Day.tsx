import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { DateData } from "react-native-calendars";
import { dates } from "../data/dates";
import { stateType } from "../types/dateData";

import {
  Poppins_400Regular,
  useFonts,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export function CustomDayComponent({
  date,
  state,
  onMonthChange,
}: {
  date: DateData;
  state: stateType;
  onMonthChange: (date: DateData) => void; // Hacerlo opcional
}) {
  const today = new Date();
  const todayFormatted = today.toLocaleDateString('en-CA');

  const isOutsideMonth = state === "disabled";

  // Buscar si la fecha pertenece a un rango en dates[]
  let foundDate = dates.find(
    (d) => date.dateString >= d.fechaInicio && date.dateString <= d.fechaFinal
  );

  let customStyle = {};
  let textColor = isOutsideMonth ? "rgba(0,0,0,0.5)" : "#000"; // Opacidad para días fuera del mes
  let backgroundColor = "transparent"; // Fondo por defecto

  if (foundDate) {
    textColor = "#fff"; // Hacer el texto blanco si está en el rango
    backgroundColor = foundDate.color;

    if (foundDate.fechaInicio === foundDate.fechaFinal) {
      customStyle = styles.circle;
    } else if (date.dateString === foundDate.fechaInicio) {
      customStyle = styles.roundedLeft;
    } else if (date.dateString === foundDate.fechaFinal) {
      customStyle = styles.roundedRight;
    } else {
      customStyle = styles.rectangle;
    }
  } else if (isOutsideMonth) {
    backgroundColor = "transparent"; // Color gris claro para días fuera del mes
  }

  const handlePress = () => {
    console.log("Fecha seleccionada:", date.dateString);

    if (isOutsideMonth) {
      console.log("Cambiando al mes:", date);
      onMonthChange(date); // Llama a la función para cambiar de mes.
    }
  };

  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!loaded && !error) {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        {
          backgroundColor: backgroundColor,
        },
        customStyle,
      ]}
      className="items-center justify-center w-full py-2"
    >
      {todayFormatted === date.dateString ? (
        <View className="items-center justify-center px-2 pt-1 rounded-full bg-escuela">
          <Text style={[styles.text, { color: textColor }]}>{date.day}</Text>
        </View>
      ) : (
        <Text style={[styles.text, { color: textColor }]} className="pt-1">{date.day}</Text>
      )}
    </TouchableOpacity>
  );
}

// Estilos corregidos
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    borderRadius: 18,
  },
  roundedLeft: {
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
  },
  roundedRight: {
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
  },
  rectangle: {
    borderRadius: 0,
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
});
