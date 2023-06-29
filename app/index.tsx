import { useRouter } from "expo-router";
import { Button, Text } from "react-native-paper";

export default function App() {
  const router = useRouter();

  return (
    <>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => router.push("/home")}
      >
        Press me
      </Button>
      <Text>Buka App.tsx lagi yuk</Text>
    </>
  );
}
