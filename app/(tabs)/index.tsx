import { Text, View, Image } from "react-native";
import { styles } from "@/styles/auth.styles";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View>
      <Text className="text-xl text-red-500">Hello</Text>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1595542341890-8162783c34a8?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={{
          width: 200,
          height: 200,
          resizeMode: "cover",
        }}
      />
      <Link href={"/notification"}>Notification</Link>
      <Link href={"/profile"}>Profile</Link>
    </View>
  );
}
