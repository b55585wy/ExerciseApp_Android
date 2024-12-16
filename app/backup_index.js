// 这个组件是 React Native 中的一个基本视图。它显示了一个包含文本的页面，文本内容是“Edit app/index.tsx to edit this screen.”，意思是提示开发者可以修改 app/index.tsx 文件来编辑这个页面。
// View 组件是 React Native 中的一个容器，用于布局和排列子元素，Text 组件用于显示文本

import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
