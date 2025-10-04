import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DarkTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
          animationTypeForReplace: "push",
          contentStyle: { backgroundColor: "rgb(1, 1, 1)" },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
        <Stack.Screen name="onboarding/index" />
        <Stack.Screen name="onboarding/personal_info" />
        <Stack.Screen name="onboarding/password" />
        <Stack.Screen name="onboarding/profile_image" />
        <Stack.Screen name="onboarding/interest" />
        <Stack.Screen name="onboarding/subscription" />

        <Stack.Screen name="forgot/index" />
        <Stack.Screen name="forgot/otp" />
        <Stack.Screen name="forgot/password" />

        <Stack.Screen name="home/index" />
        <Stack.Screen name="home/notification" />
        <Stack.Screen name="home/search" />
        <Stack.Screen name="home/all_movies" />
        <Stack.Screen name="home/explore" />
        <Stack.Screen name="home/single" />
        <Stack.Screen name="home/play" />
        <Stack.Screen name="home/subscription" />
        <Stack.Screen name="home/edit" />
        <Stack.Screen name="home/language" />
        <Stack.Screen name="home/help" />

        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
