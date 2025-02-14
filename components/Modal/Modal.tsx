import {
  View,
  ScrollView,
  Text,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import { useModal } from "@/stores/modal-store";
import Feather from "@expo/vector-icons/Feather";
import { Poppins_400Regular, useFonts } from "@expo-google-fonts/poppins";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";
import { useDrawerStatus } from "@react-navigation/drawer";

export function Modal() {
  const {
    isActivated,
    setModal,
    modalTitle,
    modalBody,
    buttonAction,
    buttonTitle,
    hasButtons,
  } = useModal();

  const isDrawerOpen = useDrawerStatus() === "open";

  useEffect(() => {
    if (isDrawerOpen) {
      if (isActivated) {
        setModal(
          false,
          modalTitle ?? "",
          hasButtons ?? true,
          modalBody,
          buttonTitle ?? "",
          () => console.log("Cerrando modal general por el drawer")
        );
      }
    }
  }, [isDrawerOpen]);

  const hacerModalFalso = () => {
    setModal(
      false,
      modalTitle ?? "",
      hasButtons ?? false,
      modalBody,
      buttonTitle ?? "",
      () => {}
    );
  };

  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.8);
  const translateY = useSharedValue(-50);
  /* const modalOpacity = useSharedValue(0); */ // Nueva propiedad para el fade-out

  const modalOpacity = useSharedValue(0); // Nueva propiedad para el fade-out

  useEffect(() => {
    if (isActivated) {
      // Animación de entrada con rebote
      opacity.value = withTiming(1, { duration: 300 });
      scale.value = withSpring(1);
      translateY.value = withSpring(0);
      modalOpacity.value = withTiming(1, { duration: 300 }); // Desvanecer entrada
    } else {
      // Animación de salida suave
      opacity.value = withTiming(0, { duration: 200 });
      scale.value = withTiming(1, { duration: 200 });
      translateY.value = withTiming(50, { duration: 200 });
      modalOpacity.value = withTiming(0, { duration: 200 }); // Desvanecer salida
    }
  }, [isActivated]);

  const modalStyle = useAnimatedStyle(() => ({
    opacity: modalOpacity.value, // Aplicar opacidad
    transform: [{ scale: scale.value }, { translateY: translateY.value }],
  }));

  const overlayStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const [loaded, error] = useFonts({
    Poppins_400Regular,
  });

  if (!loaded && !error && !isActivated) {
    return null;
  }

  return (
    <View
      pointerEvents={isActivated ? "auto" : "none"}
      className="absolute top-0 left-0 z-40 flex items-center justify-center w-full h-full"
    >
      {/* Fondo oscuro animado */}
      <Animated.View
        className="absolute top-0 left-0 w-full h-full bg-black/40"
        style={overlayStyle}
        pointerEvents={isActivated ? "auto" : "none"}
        onTouchEnd={hacerModalFalso}
      />
      <Animated.View
        className="w-11/12 p-4 bg-white shadow-lg rounded-2xl"
        style={modalStyle}
        pointerEvents={isActivated ? "auto" : "none"}
      >
        <View className="flex-row items-center justify-between">
          <Text
            className="text-2xl"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            {modalTitle}
          </Text>
          <Pressable
            className="p-2 rounded-lg active:bg-neutral-100"
            hitSlop={20}
            onPress={hacerModalFalso}
          >
            {({ pressed }) => (
              <Feather
                name="x"
                size={25}
                color={pressed ? "#039357" : "black"}
              />
            )}
          </Pressable>
        </View>

        {/* ScrollView para contenido */}
        <ScrollView
          style={{ maxHeight: 300 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator
        >
          {modalBody}
        </ScrollView>

        {hasButtons && (
          <View className="flex-row justify-between w-full mt-4">
            <Pressable
              className="flex-1 p-2 bg-red-400 rounded-lg active:bg-red-300"
              onPress={hacerModalFalso}
              hitSlop={20}
            >
              <Text
                className="text-center text-white"
                style={{ fontFamily: "Poppins_400Regular" }}
              >
                Cancelar
              </Text>
            </Pressable>
            <View className="w-2" />
            <Pressable
              className="flex-1 p-2 bg-green-400 rounded-lg active:bg-green-300"
              onPress={buttonAction}
            >
              <Text
                className="text-center text-white"
                style={{ fontFamily: "Poppins_400Regular" }}
              >
                {buttonTitle}
              </Text>
            </Pressable>
          </View>
        )}
      </Animated.View>
    </View>
  );
}
