import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';
// fill={color} color={color} 使用了这个就可以控制颜色显示图标了 这是因为 SVG 在 React Native 中的工作方式有关。让我解释一下：
// 1. fill 和 color 属性在 SVG 中有不同的作用：
// fill 直接控制 SVG 图形的填充颜色
// color 设置 currentColor 的值，当 SVG 中的元素使用 currentColor 时会继承这个值
// 在你的 SVG 文件中，可能同时存在两种颜色控制方式：
// 导入 SVG 文件


// 出现过的问题：原始代码中的问题：transform: [{ translateY: props => props.index === 2 ? 5 : 0 }]
// 这个写法是错误的，应该使用 transform: [{ translateY: props => props.index === 2 ? 5 : 0 }]
// 这个写法是错误的，transform: [{ translateY: route.name === 'statistics' ? 5 : 0 }]
import HomeIcon from '../../assets/icons/Monotone-home.svg';
import ChatIcon from '../../assets/icons/Monotone-chat.svg';
import ChartIcon from '../../assets/icons/Monotone-chart.svg';
import UserIcon from '../../assets/icons/Monotone-user.svg';
import colors from '../../assets/themes/color';
const FloatingButton = () => (
  <Link href="/(device)/linkedDevices" asChild>
    <View style={{
      position: 'absolute',
      bottom: 46,
      alignSelf: 'center',
      backgroundColor: '#A4BE7B',
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      zIndex: 1,
    }}>
      <Text style={{ fontSize: 24, color: 'white' }}>+</Text>
    </View>
  </Link>
);

export default function MainLayout() {
  return (
    <>
      <Tabs screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 0,  // 移除顶部边框
          height: 66,         // 设置标签栏高度
          borderRadius: 30,   // 圆角效果
          margin: 10,         // 四周留白
          position: 'flex',
          // 绝对定位，确保标签栏固定在底部，但是这样会覆盖掉其他内容
          // position: 'absolute',
          // bottom: 0,
          // left: 0,
          // right: 0,
          padding: 8,


          // iOS 平台特有的阴影效果
          shadowColor: '#000',      // 阴影颜色
          shadowOffset: {
            width: 0,              // 水平偏移量
            height: -2,            // 垂直偏移量（负值表示向上）
          },
          shadowOpacity: 0.1,      // 阴影透明度
          shadowRadius: 5,         // 阴影扩散半径

          // Android 平台特有的阴影效果
          // Platform.OS 用于判断当前运行平台
          // 在 iOS 上设为 0（因为 iOS 使用 shadow* 属性）
          elevation: Platform.OS === 'android' ? 3 : 0,
          backgroundColor: colors.background.primary,
        },

        // 每个标签项的样式
        tabBarItemStyle: {
          alignItems: 'center',      // 水平居中对齐
          justifyContent: 'center',  // 垂直居中对齐
          marginTop: 13,
          height: 44,
          // transform 用于位置变换
          // route.name 用于识别当前标签项
          // 当标签是 'statistics' 时，向下移动 5 个单位
          // 否则保持原位（0）
          // 注意：transform 只接受具体的数字或百分比，不接受函数
          // transform: [{
          //   translateY: route.name === 'statistics' ? 5 : 0
          // }], 加了transform后阴影会出现裁剪。
        },

        // 标签激活和未激活时的颜色
        tabBarActiveTintColor: '#4F3422',    // 选中时的颜色
        tabBarInactiveTintColor: '#C9C7C5',  // 未选中时的颜色
        tabBarShowLabel: false,              // 不显示标签文本
      })}>
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
      <FloatingButton />
    </>
  );
}
