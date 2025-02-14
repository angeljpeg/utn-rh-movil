import { View } from "react-native";

import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

export function Icons({
  size,
  color,
  type,
}: {
  size: number;
  color: string;
  type: string;
}) {
  return (
    <>
      {type === "PENDIENTE" ? (
        <Entypo name="dots-three-horizontal" size={size} color={color} />
      ) : type === "APROBADO" ? (
        <Feather name="check" size={size} color={color} />
      ) : (
        <AntDesign name="close" size={size} color={color} />
      )}
    </>
  );
}
