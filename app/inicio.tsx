import { View, Text } from "react-native";
import { useUserStore } from "@/stores/user-store";
import { useModalDrawer } from "@/stores/modal-drawer-store";
import { StatusBar } from "react-native";

export default function Index() {
  const { user, token } = useUserStore();
  const { isActivated, setModal } = useModalDrawer();
  /* console.log(user);
  console.log(token); */

  return (
    <View className="items-center justify-center flex-1 bg-white">
      <Text className="px-2 text-4xl text-center font-extralight">
        ¡{user?.genero === "F" ? "Bienvenida" : "Bienvenido"},{" "}
        <Text className="font-normal color-escuela">{user?.nombre}</Text>!
      </Text>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    </View>
  );
}
