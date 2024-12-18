// RootLayout（RootLayout 组件）:

// RootLayout 使用了 expo-router 中的 Stack 组件，代表一个栈式导航的结构。栈式导航通常用于在不同页面之间进行切换。
// Stack 组件是用来定义路由布局的，通常会在这个组件内设置页面的层级结构。

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(introduction)" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(main)" />
      <Stack.Screen name="(healthAssessment)" />
    </Stack>
  );
}
