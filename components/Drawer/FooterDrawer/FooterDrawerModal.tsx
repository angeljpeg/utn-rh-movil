import { View, Pressable, Text } from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useRouter, usePathname } from "expo-router";
import { Platform } from "react-native";
import { useModalDrawer } from "@/stores/modal-drawer-store";

export function FooterDrawerModal() {
  const { isActivated, setModal } = useModalDrawer();

  const router = useRouter();

  const pathname = usePathname();
  const marginBottomClass =
    Platform.OS === "web"
      ? "mb-0"
      : Platform.OS === "android"
      ? "mb-6"
      : "mb-4";

  return (
    <View
      className={`absolute bottom-[100%] z-30 right-4 gap-4 p-4 bg-white border rounded-lg border-neutral-200 ${marginBottomClass}`}
    >
      <Pressable
        onPress={() => router.push("/cuenta")}
        className="flex-row items-center w-full p-4 rounded-full"
        style={pathname === "/cuenta" ? { backgroundColor: "#e3f0e7" } : {}}
      >
        <FontAwesome6
          name="user"
          size={20}
          color={pathname === "/cuenta" ? "#15803d" : "black"}
        />
        <View className="ml-4">
          <Text
            style={[
              { fontFamily: "Poppins_400Regular" },
              pathname === "/cuenta" && { color: "#15803d" },
            ]}
          >
            Mi cuenta
          </Text>
        </View>
      </Pressable>

      <Pressable
        onPress={() => {
          setModal(false);
          router.push("/");
        }}
        className="flex-row items-center w-full p-4"
      >
        <SimpleLineIcons name="logout" size={20} color="black" />
        <View className="ml-4">
          <Text style={{ fontFamily: "Poppins_400Regular" }}>
            Cerrar Sesión
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
