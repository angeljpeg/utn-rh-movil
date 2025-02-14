import { View, Pressable, Animated, Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useModal } from "@/stores/modal-store";
import { ModalBodySimbology } from "@/pages/Calendar/components/Modal/Simbology/ModalBodySimbology";
import { useRef } from "react";

export function CheckSymbology() {
  const { setModal } = useModal();
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const Component = Platform.OS === "web" ? View : Animated.View;

  const handlePressIn = () => {
    Animated.timing(scaleAnim, {
      toValue: 0.9, // Se reduce un 10%
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scaleAnim, {
      toValue: 1, // Vuelve al tamaño normal
      duration: 100,
      useNativeDriver: true,
    }).start();

    // Abre el modal
    setModal(true, "Simbología", false, <ModalBodySimbology />, "Aceptar", () =>
      console.log("Clic en el botón del modal")
    );
  };

  return (
    <Component
      className="absolute bottom-0 right-0 z-30 self-start"
      style={Platform.OS !== "web" && { transform: [{ scale: scaleAnim }] }}
    >
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        className="items-center justify-center mb-6 mr-6 rounded-full w-14 h-14 bg-escuela"
      >
        <Component
          style={Platform.OS !== "web" && { transform: [{ scale: scaleAnim }] }}
        >
          <Ionicons name="information-outline" size={35} color="#fff" />
        </Component>
      </Pressable>
    </Component>
  );
}
