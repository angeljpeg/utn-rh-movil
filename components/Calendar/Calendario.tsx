import { Calendar, LocaleConfig } from "react-native-calendars";
import { Arrow } from "./Arrow";
import { nombresEspanol } from "./data/nombresEspanol";
import { day } from "./types/day";
import { dates } from "./data/dates";
import {
  Poppins_400Regular,
  useFonts,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export function Calendario() {
  LocaleConfig.locales["es"] = nombresEspanol;
  LocaleConfig.defaultLocale = "es";

  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  if (!loaded && !error) {
    return null;
  }

  return (
    <Calendar
      locale="es"
      markingType={"custom"}
      markedDates={dates}
      theme={{
        textMonthFontFamily: "Poppins_600SemiBold",
        textDayHeaderFontFamily: "Poppins_400Regular",
        textDayFontFamily: "Poppins_400Regular",
      }}
      renderArrow={(direction: string) => <Arrow direction={direction} />}
      onDayPress={(day: day) => {
        console.log("selected day", day);
      }}
    />
  );
}
