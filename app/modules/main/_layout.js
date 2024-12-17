import { Tabs } from "expo-router";
import { FontAwesome5 } from '@expo/vector-icons';

export default function MainLayout() {
  return (
    <Tabs 
      screenOptions={{
        tabBarActiveTintColor: '#8B4513',
        tabBarInactiveTintColor: '#808080',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E0E0E0',
        },
        animation: 'slide_from_right',
      }}>
      
      <Tabs.Screen
        name="screens/HomeScreen"
        options={{
          title: '首页',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="screens/ChatbotScreen"
        options={{
          title: '对话',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="robot" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="screens/StatisticScreen"
        options={{
          title: '统计',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="chart-bar" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="screens/InfoScreen"
        options={{
          title: '我的',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}