import { View, Pressable, Animated, Platform } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { useModal } from "@/stores/modal-store";
import { ModalBodySimbology } from "@/components/Calendar/components/Modal/Simbology/ModalBodySimbology";
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
        className="p-4 mb-6 mr-6 active:bg-escuelaBajito bg-escuela rounded-3xl"
      >
        <Component
          style={Platform.OS !== "web" && { transform: [{ scale: scaleAnim }] }}
        >
          <Entypo name="grid" size={35} color="#ffffff" />
        </Component>
      </Pressable>
    </Component>
  );
}
