import { Stack } from "expo-router";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";

const BaseLayout = () => {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <Stack initialRouteName="home">
          {/* WARNING: Stack.Screen can be configured dynamic on it's on page */}
          {/* Here, we are using the static way */}
          {/* File name: app/index.tsx -> name: index */}
          <Stack.Screen name="index" options={{ title: "First Screen" }} />
          {/* File name: app/home/index.tsx  -> name: home/index */}
          <Stack.Screen name="home/index" options={{ title: "Home Screen" }} />
        </Stack>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default BaseLayout;
