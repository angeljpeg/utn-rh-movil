import { View, Text } from "react-native";

import { Poppins_300Light, useFonts } from "@expo-google-fonts/poppins";

export function FooterComponent() {
  const [loaded, error] = useFonts({
    Poppins_300Light,
  });

  if (!loaded && !error) {
    return null;
  }

  return (
    <View className="p-4 mx-4 mb-4 rounded-2xl bg-neutral-200">
      <Text className="text-xl color-neutral-700" style={{ fontFamily: "Poppins_300Light" }}>
        Ver más
      </Text>
    </View>
  );
}
