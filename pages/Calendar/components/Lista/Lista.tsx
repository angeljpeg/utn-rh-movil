import { FlatList, View, Text } from "react-native";
import { dates } from "../../data/dates";
import { FooterComponent } from "./components/FooterComponent";
import { ListComponent } from "./components/ListComponent";

export function Lista() {
  return (
    <FlatList
      data={dates}
      keyExtractor={(item) => item.solicitud_id.toString()}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      contentContainerStyle={{ backgroundColor: "#fff" }}
      /* ItemSeparatorComponent={separatorComponent} */
      /* ListHeaderComponent={headerComponent} */
      className="mx-2 mt-2 mb-3 rounded-2xl"
      /* ListFooterComponent={<View className="w-2"></View>} */
      /* ListFooterComponentStyle={styles.footerComp} */
      ListEmptyComponent={<Text>No Items</Text>} //Que pasa si no hay datos?
      renderItem={({ item }) => (
        <ListComponent
          solicitud_id={item.solicitud_id}
          fechaInicio={item.fechaInicio}
          fechaFinal={item.fechaFinal}
          nombre_tipo={item.nombre_tipo}
          color={item.color}
          status={item.status}
        />
      )}
    />
  );
}
