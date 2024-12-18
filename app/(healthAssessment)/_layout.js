import { Stack } from "expo-router";

export default function HealthAssessmentLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="info" options={{ headerShown: false }} />
      <Stack.Screen name="age" options={{ headerShown: false }} />
      <Stack.Screen name="goal" options={{ headerShown: false }} />
      <Stack.Screen name="weight" options={{ headerShown: false }} />
      <Stack.Screen name="height" options={{ headerShown: false }} />
      <Stack.Screen name="waistline" options={{ headerShown: false }} />
      <Stack.Screen name="anxiety" options={{ headerShown: false }} />
      <Stack.Screen name="posture" options={{ headerShown: false }} />
      <Stack.Screen name="breathingHabit" options={{ headerShown: false }} />
      <Stack.Screen name="abdominalStrength" options={{ headerShown: false }} />
      <Stack.Screen name="summary" options={{ headerShown: false }} />
    </Stack>
  );
}
