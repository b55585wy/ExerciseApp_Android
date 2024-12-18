import React from "react";
import colors from "../../../assets/themes/color";
//引入view组件
import { Pressable, Text, StyleSheet, View } from "react-native";
//forwardRef的用法：
const ConfirmedButton = React.forwardRef(({ label, icon = null, ...props }, ref) => {
  return (
    <Pressable ref={ref} {...props} style={[styles.confirmedButton]}>
      <Text style={styles.confirmedButtonText}>{label || 'Confirm'}</Text>
    </Pressable>
  );
});

//react-native创建样式表格的方式，有一些优点，比如池化（通过引用来复用样式表，而避免了在每次渲染组件时创建），
// 以及在样式表中使用常量，可以提高性能。
const styles = StyleSheet.create({
  confirmedButton: {
    // backgroundColor: '#4A321F',
    backgroundColor: colors.primaryLight,
    margin: 20,
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  confirmedButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
export default ConfirmedButton;