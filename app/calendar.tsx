import { ScrollView, View } from "react-native";
import { Calendario } from "@/components/Calendar/Calendario";
import { CheckSymbology } from "@/components/Calendar/components/CheckSymbology";
import { Modal } from "@/components/Modal/Modal";

export default function CalendarioPage() {
  /* const Container = Platform.OS === "web" ? ScrollView : SafeAreaView; */

  return (
    <View className="flex-1">
      <CheckSymbology />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Calendario />
        <Modal />
      </ScrollView>
    </View>
  );
}
