import { useRouter } from "expo-router";
import { Button, Text } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "../styles/custom";

const FirstScreen = (props: any) => {
  console.log("app/index", props);

  const router = useRouter();

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />

        <Text variant="bodyLarge">This is the First Screen</Text>
        <Button
          icon="forward"
          mode="contained"
          onPress={() => router.push("/home")}
        >
          Press me
        </Button>
      </SafeAreaView>
    </>
  );
};

export default FirstScreen;
