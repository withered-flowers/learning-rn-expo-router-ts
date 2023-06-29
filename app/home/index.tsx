import { useRouter } from "expo-router";
import { Button, Text } from "react-native-paper";

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Text>Ini adalah halaman Home</Text>
      <Button mode="outlined" onPress={() => router.back()}>
        Go back
      </Button>
    </>
  );
};

export default Home;
