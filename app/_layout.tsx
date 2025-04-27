import "../global.css";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import InitialLayout from "@/components/InitialLayout";
import ClerkAndConvex from "@/providers/ClerkAndConvex";

export default function RootLayout() {
  return (
    <ClerkAndConvex>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#25292e" }}>
          <InitialLayout />
        </SafeAreaView>
      </SafeAreaProvider>
    </ClerkAndConvex>
  );
}
//1:10:32 social app in react-native
