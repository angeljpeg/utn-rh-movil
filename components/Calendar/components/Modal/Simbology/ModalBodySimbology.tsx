import { FlatList, ScrollView, View, Text } from "react-native";
import { Simbol } from "./Simbol";
import { simbols } from "./data/simbols";

export function ModalBodySimbology() {
  return (
    <View>
      {simbols.map((item, index) => (
        <Simbol key={index} styles={item.styles} title={item.title} />
      ))}
    </View>
  );
}
