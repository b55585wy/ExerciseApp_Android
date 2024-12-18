import { Tabs } from 'expo-router';
// fill={color} color={color} 使用了这个就可以控制颜色显示图标了 这是因为 SVG 在 React Native 中的工作方式有关。让我解释一下：
// 1. fill 和 color 属性在 SVG 中有不同的作用：
// fill 直接控制 SVG 图形的填充颜色
// color 设置 currentColor 的值，当 SVG 中的元素使用 currentColor 时会继承这个值
// 在你的 SVG 文件中，可能同时存在两种颜色控制方式：
// 导入 SVG 文件
import HomeIcon from '../../assets/icons/Monotone-home.svg';
import ChatIcon from '../../assets/icons/Monotone-chat.svg';
import ChartIcon from '../../assets/icons/Monotone-chart.svg';
import UserIcon from '../../assets/icons/Monotone-user.svg';

export default function MainLayout() {
  return (
    <Tabs screenOptions={{
      tabBarStyle: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        elevation: 0,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0,
        height: 60,
        borderRadius: 30,
        margin: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: -4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      tabBarItemStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
      },
      // tabBarActiveTintColor: '#C9C7C5',
      // tabBarInactiveTintColor: '#9E9E9E',
      tabBarActiveTintColor: '#4F3422',
      tabBarInactiveTintColor: '#C9C7C5',
      tabBarShowLabel: false,

    }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <HomeIcon width={24} height={24} fill={color} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="chatbot"
        options={{
          tabBarIcon: ({ color }) => (
            <ChatIcon width={24} height={24} fill={color} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="statistics"
        options={{
          tabBarIcon: ({ color }) => (
            <ChartIcon width={24} height={24} fill={color} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="info"
        options={{
          tabBarIcon: ({ color }) => (
            <UserIcon width={24} height={24} fill={color} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
