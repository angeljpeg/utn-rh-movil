import { View, Pressable } from "react-native";
import UtnSvg from "@/assets/svg/UtnSvg";
import AntDesign from "@expo/vector-icons/AntDesign";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";

export function TopDrawer() {
  const navigation = useNavigation();

  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };
  return (
    <View className="flex flex-row items-center justify-between px-4 my-4">
      <View className="w-[25%]">
        <UtnSvg height={20} />
      </View>

      <Pressable
        onPress={closeDrawer}
        className="p-2 rounded-lg active:bg-neutral-100"
      >
        {({ pressed }) => (
          <AntDesign
            name="close"
            size={24}
            color={pressed ? "#039357" : "black"}
          />
        )}
      </Pressable>
    </View>
  );
}
