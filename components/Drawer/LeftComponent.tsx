import { View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

import Feather from "@expo/vector-icons/Feather";

export default function LeftComponent(props: any) {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <Pressable
      onPress={openDrawer}
      className="p-2 ml-2 rounded-lg active:bg-neutral-100"
    >
      {({ pressed }) => (
        <Feather name="menu" size={24} color={pressed ? "#039357" : "black"} />
      )}
    </Pressable>
  );
}
