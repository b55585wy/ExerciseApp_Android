import { Stack } from "expo-router";

export default function DeviceLayout() {
  Stack.ScreenOptions = {
    headerShown: false,
  }
  return <Stack />;
}
