import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { Arrow } from "./components/Arrow";
import { CustomDayComponent } from "./components/Day";
import { nombresEspanol } from "./data/nombresEspanol";
import { useState } from "react";
import { stateType } from "./types/dateData";

import {
  Poppins_400Regular,
  useFonts,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

export function Calendario() {
  LocaleConfig.locales["es"] = nombresEspanol;
  LocaleConfig.defaultLocale = "es";

  const [currentMonth, setCurrentMonth] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1, // getMonth() es 0-based, por eso sumamos 1
  });

  const handleMonthChange = (date: DateData) => {
    setCurrentMonth({
      year: date.year,
      month: date.month,
    });
  };

  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  if (!loaded && !error) {
    return null;
  }

  return (
    <Calendar
      key={`${currentMonth.year}-${currentMonth.month}`}
      animateTransitions={true} // 🔹 Activa la animación entre meses
      locale="es"
      theme={{
        textMonthFontFamily: "Poppins_600SemiBold",
        textDayHeaderFontFamily: "Poppins_400Regular",
      }}
      current={`${currentMonth.year}-${currentMonth.month}-01`}
      renderArrow={(direction: string) => <Arrow direction={direction} />}
      onMonthChange={(date: DateData) => {
        console.log(`Cambio a: ${date.dateString}`);
        setCurrentMonth({
          year: date.year,
          month: date.month,
        });
      }}
      dayComponent={({ date, state }: { date: DateData; state: stateType }) => (
        <CustomDayComponent
          date={date}
          state={state}
          onMonthChange={handleMonthChange}
        />
      )}
    />
  );
}
