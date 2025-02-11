import { View, Text } from "react-native";
import { Poppins_400Regular, useFonts } from "@expo-google-fonts/poppins";

export function Simbol({ styles, title }: { styles: string; title: string }) {
  const [loaded, error] = useFonts({
    Poppins_400Regular,
  });
  if (!loaded && !error) {
    return null;
  }

  return (
    <View className="flex-row items-center gap-4 mb-4">
      <View className={styles}></View>
      <Text style={{ fontFamily: "Poppins_400Regular" }} className="text-lg">{title}</Text>
    </View>
  );
}
