import { View, Platform, ScrollView, SafeAreaView, Text } from "react-native";
import { Calendario } from "@/components/Calendar/Calendario";

export default function CalendarioPage() {
  /* const Container = Platform.OS === "web" ? ScrollView : SafeAreaView; */

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Calendario />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
          augue in massa porta dignissim. Nullam dignissim finibus sapien vel
          aliquet. Integer volutpat varius dui sed dapibus. Pellentesque nunc
          massa, commodo a imperdiet vitae, tristique in erat. Maecenas
          eleifend, purus eget accumsan mattis, urna tortor lacinia nulla, a
          porta urna libero id massa. Donec vitae felis et metus hendrerit
          tempus. Aenean feugiat vehicula molestie. Ut porta metus aliquet justo
          pellentesque vehicula. Nunc porta scelerisque felis. Curabitur
          gravida, ante vel fringilla ornare, ex magna placerat nibh, vitae
          volutpat tellus libero nec lacus. Nulla facilisi. Proin eget dolor
          imperdiet, vulputate metus sed, feugiat mauris. Donec neque eros,
          vehicula sed hendrerit gravida, elementum eget orci. Morbi efficitur
          varius ante nec fermentum.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
          augue in massa porta dignissim. Nullam dignissim finibus sapien vel
          aliquet. Integer volutpat varius dui sed dapibus. Pellentesque nunc
          massa, commodo a imperdiet vitae, tristique in erat. Maecenas
          eleifend, purus eget accumsan mattis, urna tortor lacinia nulla, a
          porta urna libero id massa. Donec vitae felis et metus hendrerit
          tempus. Aenean feugiat vehicula molestie. Ut porta metus aliquet justo
          pellentesque vehicula. Nunc porta scelerisque felis. Curabitur
          gravida, ante vel fringilla ornare, ex magna placerat nibh, vitae
          volutpat tellus libero nec lacus. Nulla facilisi. Proin eget dolor
          imperdiet, vulputate metus sed, feugiat mauris. Donec neque eros,
          vehicula sed hendrerit gravida, elementum eget orci. Morbi efficitur
          varius ante nec fermentum.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
          augue in massa porta dignissim. Nullam dignissim finibus sapien vel
          aliquet. Integer volutpat varius dui sed dapibus. Pellentesque nunc
          massa, commodo a imperdiet vitae, tristique in erat. Maecenas
          eleifend, purus eget accumsan mattis, urna tortor lacinia nulla, a
          porta urna libero id massa. Donec vitae felis et metus hendrerit
          tempus. Aenean feugiat vehicula molestie. Ut porta metus aliquet justo
          pellentesque vehicula. Nunc porta scelerisque felis. Curabitur
          gravida, ante vel fringilla ornare, ex magna placerat nibh, vitae
          volutpat tellus libero nec lacus. Nulla facilisi. Proin eget dolor
          imperdiet, vulputate metus sed, feugiat mauris. Donec neque eros,
          vehicula sed hendrerit gravida, elementum eget orci. Morbi efficitur
          varius ante nec fermentum.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
          augue in massa porta dignissim. Nullam dignissim finibus sapien vel
          aliquet. Integer volutpat varius dui sed dapibus. Pellentesque nunc
          massa, commodo a imperdiet vitae, tristique in erat. Maecenas
          eleifend, purus eget accumsan mattis, urna tortor lacinia nulla, a
          porta urna libero id massa. Donec vitae felis et metus hendrerit
          tempus. Aenean feugiat vehicula molestie. Ut porta metus aliquet justo
          pellentesque vehicula. Nunc porta scelerisque felis. Curabitur
          gravida, ante vel fringilla ornare, ex magna placerat nibh, vitae
          volutpat tellus libero nec lacus. Nulla facilisi. Proin eget dolor
          imperdiet, vulputate metus sed, feugiat mauris. Donec neque eros,
          vehicula sed hendrerit gravida, elementum eget orci. Morbi efficitur
          varius ante nec fermentum.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
