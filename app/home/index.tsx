import { useRouter, Stack } from "expo-router";
import { Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "../../styles/custom";

const HomeScreen = (props: any) => {
  console.log("app/home/index", props);

  const router = useRouter();

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* Override Stack.Screen options from _layout.tsx, cannot declare "name" */}
        <Stack.Screen options={{ title: "Override Home Screen" }} />

        <Text variant="bodyLarge">This is Home Screen</Text>
        <Button icon="backburger" mode="outlined" onPress={() => router.back()}>
          Go back
        </Button>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
