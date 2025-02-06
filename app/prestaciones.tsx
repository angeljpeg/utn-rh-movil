import { View, Text } from "react-native";
import {useUserStore} from "../stores/user-store"

export default function Prestaciones() {
  const {user, token} = useUserStore()
  /* console.log(user)
  console.log(token) */

  return (
    <View className="items-center justify-center flex-1 bg-white">
      <Text className="text-4xl font-extralight">Prestaciones page</Text>
      <Text className="color-green-500">{user?.usuarioId}</Text>
      <Text className="color-green-500">{user?.matricula}</Text>
      <Text className="color-green-500">{user?.password}</Text>
    </View>
  );
}