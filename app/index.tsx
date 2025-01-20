import { View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import { Poppins_400Regular, useFonts } from "@expo-google-fonts/poppins";
import { fetchLogin } from "@/api/Users/fetchLogin";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "expo-router";

import { useUser } from "../context/UserContext";

export default function LoginUI() {
  const { user, setUser } = useUser();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      matricula: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (data: { matricula: string; password: string }) => {
    try {
      const response = await fetchLogin(data);
      if (response.token) {
        console.log("response", response);
        
        router.push("/(tabs)");
      } else {
        // Si la API devuelve un error, extraemos y mostramos el mensaje
        const errorMessage = response.data || "Error desconocido";
        console.log("Error en la matrícula:", response);

        // Aquí puedes usar un estado o react-hook-form para manejar el mensaje de error
        setError("matricula", { type: "server", message: errorMessage });
      }
    } catch (error) {
      console.error("error: ", error);
    }
  };

  const [loaded, error] = useFonts({
    Poppins_400Regular,
  });
  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={style.container} className="bg-neutral-200">
      <View className="justify-center p-2 mx-4 rounded-lg">
        <Text
          className="self-center text-3xl font-medium color-black "
          style={{ fontFamily: "Poppins_400Regular" }}
        >
          Hola de nuevo
        </Text>
        <Text
          className="self-center mb-8 text-sm font-medium color-neutral-600"
          style={{ fontFamily: "Poppins_400Regular" }}
        >
          Recursos Humanos te da la bienvenida
        </Text>

        <Text
          className="mb-2 text-base font-medium"
          style={{ fontFamily: "Poppins_400Regular" }}
        >
          Matricula
        </Text>

        <Controller
          name="matricula"
          control={control}
          defaultValue=""
          rules={{ required: "El nombre es obligatorio" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Ingresa tu nombre"
              placeholderTextColor="gray"
              className="px-4 py-2 rounded-lg outline-none bg-neutral-100/90 color-neutral-700"
              style={{ fontFamily: "Poppins_400Regular" }}
            />
          )}
        />
        {errors.matricula && (
          <Text style={{ color: "red" }}>{errors.matricula.message}</Text>
        )}

        <Text
          className="mt-2 mb-2 text-base font-medium"
          style={{ fontFamily: "Poppins_400Regular" }}
        >
          Contraseña
        </Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="**********"
              placeholderTextColor={"#525252"}
              secureTextEntry={true}
              className="px-4 py-2 rounded-lg outline-none bg-neutral-100/90 color-neutral-700"
              style={{ fontFamily: "Poppins_400Regular" }}
            />
          )}
          name="password"
        />
        {errors.password && <Text>La contraseña es requerida</Text>}

        <Pressable
          onPress={handleSubmit(onSubmit)}
          className="px-4 py-2 mt-8 bg-green-500 rounded-lg active:bg-green-400"
        >
          <Text
            className="font-semibold text-center color-white"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            Ingresar
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
