// 这个文件是用来设置auth模块的导航的，为了避免导航Stack栈溢出
//在次级目录下再创建一个layout有什么用？
// 1. 路由分组和导航控制
// 2. 认证状态管理
// 3. 共享状态和UI
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
    </Stack>
  );
}
