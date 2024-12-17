// 进行本地登陆验证，使用asyncstorage来进行存储和验证本地登陆信息
// SecureStore 实际上比 AsyncStorage 更安全，因为它会使用设备的安全存储机制来保存数据。不过要注意，SecureStore 在 Web 环境中不可用，如果您的应用需要支持 Web 平台，那么还是需要解决 AsyncStorage 的安装问题

// 使用useRef来初始化动画但是在输入账号密码的时候出现了白屏
// 原因如下：动画初始化时机：
// 在之前的代码中，动画值可能在组件完全加载前就开始执行
// 新代码中使用 useRef 和 useEffect 确保了动画值在组件挂载后才开始初始化和执行
// 为什么要用 useRef：
// 保持值的持久性（在重渲染之间保持不变）
// 不会触发组件重渲染
// 适合存储动画值这类不需要触发重渲染的数据

// Link和router适用情况：
// Link:
// 菜单项
// 导航按钮
// 底部标签栏
// router:
// 登录成功后跳转
// 表单提交后导航
// 条件判断后的路由跳转

//await AsyncStorage.clear(); 清除测试账号数据

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Animated, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import ConfirmedButton from '../../../components/button/confirmedButtion';
import colors from '../../../assets/themes/color';
import Logomark from '../../../assets/icons/logoMark';
import { typography } from '../../../assets/themes/typography';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // 修改动画初始化方式
  const headerAnimation = useRef(new Animated.Value(0)).current;
  const formAnimation = useRef(new Animated.Value(0)).current;
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 使用更安全的动画序列
    const startAnimations = () => {
      Animated.sequence([
        Animated.timing(headerAnimation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(formAnimation, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnimation, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    };

    startAnimations();
  }, []);

  // 修改输入处理函数
  const handleEmailChange = (text) => {
    try {
      setEmail(text);
    } catch (error) {
      console.log('Email input error:', error);
    }
  };

  const handlePasswordChange = (text) => {
    try {
      setPassword(text);
    } catch (error) {
      console.log('Password input error:', error);
    }
  };

  const headerStyle = {
    transform: [
      {
        translateY: headerAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [-50, 0],
        }),
      },
    ],
    opacity: headerAnimation,
  };

  const formStyle = {
    transform: [
      {
        translateY: formAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [50, 0],
        }),
      },
    ],
    opacity: formAnimation,
  };

  const fadeStyle = {
    opacity: fadeAnimation,
  };


  // 进行本地登陆验证，使用asyncstorage来进行存储和验证本地登陆信息
  const handleSignIn = async () => {
    try {
      setLoading(true);
      const storedUsers = await AsyncStorage.getItem('users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        // 存储当前用户信息和登录状态
        await AsyncStorage.setItem('currentUser', JSON.stringify({
          ...user,
          lastLoginAt: new Date().toISOString()
        }));
        router.replace('/modules/main/screens/HomeScreen');
      } else {
        Alert.alert('Error', 'Invalid email or password');
      }
    } catch (error) {
      console.error('Sign in error:', error);
      Alert.alert('Error', 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <Animated.View style={[styles.header, headerStyle]}>
        <View style={{ marginBottom: 20 }}>
          {/* Your Logo Component */}
          <Logomark width={50} />
        </View>

      </Animated.View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sign In</Text>
      </View>

      {/* Form Section */}
      <Animated.View style={[styles.formContainer, formStyle]}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email Address</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputIcon}>✉️</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={handleEmailChange}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputIcon}>🔒</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={handlePasswordChange}
              placeholder="Enter your password"
              secureTextEntry
            />
          </View>
        </View>

        {/* Sign In Button with animation */}
        <Animated.View style={fadeStyle}>
          <ConfirmedButton
            // label="Sign In →"
            label={loading ? 'Loading...' : 'Sign In '}
            onPress={handleSignIn}
            disabled={loading}
          />
        </Animated.View>

        {/* Social Login with animation */}
        <Animated.View style={[styles.socialContainer, fadeStyle]}>
          <Pressable style={styles.socialButton}>
            <Text>f</Text>
          </Pressable>
          <Pressable style={styles.socialButton}>
            <Text>G</Text>
          </Pressable>
          <Pressable style={styles.socialButton}>
            <Text>📷</Text>
          </Pressable>
        </Animated.View>

        {/* Bottom Links with animation */}
        <Animated.View style={[styles.bottomLinks, fadeStyle]}>
          <Text style={styles.bottomText}>
            Don't have an account?{' '}
            <Link href="./SignUpScreen" replace={true} style={styles.link}>
              Sign Up
            </Link>
          </Text>
          <Link href="/forgot-password" style={[styles.link, styles.forgotPassword]}>
            Forgot Password
          </Link>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary, // bg-100
  },
  header: {
    height: '20%',
    //让header往上走自身高度的1/2
    backgroundColor: colors.primaryLight, // primary-100
    width: '100%',
    borderBottomLeftRadius: '25%',
    borderBottomRightRadius: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },

  title: {
    fontSize: typography.presets.h1.fontSize,
    fontWeight: typography.presets.h1.fontWeight,
    color: colors.text.primary, // bg-100
    letterSpacing: -0.3,
    lineHeight: 38,
    fontFamily: "Urbanist-ExtraBold",
    textAlign: "center",
    // textAlign 属性控制的是文本内容在其容器内的对齐方式
  },
  titleContainer: {
    margin: 20,
  },
  formContainer: {
    flex: 1,
    padding: 24,
    marginTop: -20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: typography.presets.bodySmallBold.fontSize,
    fontWeight: typography.presets.bodySmallBold.fontWeight,
    color: colors.text.primary, // text-100
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.secondary, // bg-200
    borderRadius: 25,
    padding: 12,
  },
  inputIcon: {
    marginRight: 10,
    fontSize: 20,
  },
  input: {
    flex: 1,
    fontSize: typography.presets.bodySmall.fontSize,
    color: colors.text.primary, // text-100
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 30,
    marginBottom: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.background.secondary, // bg-200
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.background.tertiary, // bg-300
  },
  bottomLinks: {
    alignItems: 'center',
    gap: 12,
  },
  bottomText: {
    // color: colors.text.secondary, // text-200
    fontSize: typography.presets.bodySmall.fontSize,
  },
  link: {
    color: colors.primary, // primary-100
    textDecorationLine: 'underline',
  },
  forgotPassword: {
    marginTop: 8,
  },

});