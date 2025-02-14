import { View, Pressable, Animated, Platform } from "react-native";
import { useModal } from "@/stores/modal-store";
import { ReactNode, useRef } from "react";
import { InfoModal } from "@/stores/modal-store";

export function BottomRightButton({
  icon,
  arrayModal,
}: {
  icon: ReactNode;
  arrayModal: InfoModal;
}) {
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
    setModal(
      arrayModal.isActivated ?? true,
      arrayModal.modalTitle ?? "",
      arrayModal.hasButtons ?? false,
      arrayModal.modalBody,
      arrayModal.buttonTitle ?? "",
      arrayModal.buttonAction ?? undefined
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
          {icon}
        </Component>
      </Pressable>
    </Component>
  );
}
