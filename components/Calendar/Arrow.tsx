import { View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export function Arrow({ direction }: { direction: string }) {
  return (
    <View>
      {direction == "left" ? (
        <AntDesign name="arrowleft" size={24} color="black" />
      ) : (
        <AntDesign name="arrowright" size={24} color="black" />
      )}
    </View>
  );
}
