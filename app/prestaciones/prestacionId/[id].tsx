import { View, Text, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";

export default function Prestaciones() {
  const { id } = useLocalSearchParams();
  const router = useRouter()
  return (
    <View className="items-center justify-center flex-1 bg-white">
      <Text className="text-4xl text-center font-extralight">
        Prestación específica: {id}
      </Text>
      <Link href={"/prestacion"}>Ir a prestaciones</Link>
    </View>
  );
}