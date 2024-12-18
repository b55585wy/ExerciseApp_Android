import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, Animated, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import ConfirmedButton from '../components/button/confirmedButtion';
import colors from '../../assets/themes/color';
import Logomark from '../../assets/icons/logoMark';
import typography from '../../assets/themes/typography';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUpScreen() {
  // 状态管理
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');

  // 动画值初始化
  const headerAnimation = useRef(new Animated.Value(0)).current;
  const formAnimation = useRef(new Animated.Value(0)).current;
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  // 组件加载时启动动画序列
  useEffect(() => {
    Animated.sequence([
      // Logo区域从上方滑���
      Animated.timing(headerAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      // 表单区域从下方滑入
      Animated.timing(formAnimation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      // 按钮和底部链接淡入
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  // 邮箱验证函数
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid Email Address!!!');
      return false;
    }
    setEmailError('');
    return true;
  };

  // 输入处理函数
  const handleEmailChange = (text) => {
    setEmail(text);
    validateEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  // 注册处理函数
  const handleSignUp = async () => {
    try {
      setLoading(true);

      // 表单验证
      if (!email || !password || !confirmPassword) {
        Alert.alert('Error', 'Please fill in all fields');
        return;
      }

      if (!validateEmail(email)) {
        return;
      }

      if (password !== confirmPassword) {
        Alert.alert('Error', 'Passwords do not match');
        return;
      }

      // 获取现有用户数据
      const storedUsers = await AsyncStorage.getItem('users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      // 检查邮箱是否已注册
      if (users.some(user => user.email === email)) {
        Alert.alert('Error', 'Email already registered');
        return;
      }

      // 创建新用户
      const newUser = {
        id: Date.now().toString(),
        email,
        password,
        createdAt: new Date().toISOString()
      };

      // 保存用户数据
      users.push(newUser);
      await AsyncStorage.setItem('users', JSON.stringify(users));

      Alert.alert('Success', 'Registration successful', [
        {
          text: 'OK',
          // onPress: () => router.replace('/(auth)/sign-in')
          onPress: () => router.replace('/(healthAssessment)/info')
        }
      ]);
    } catch (error) {
      console.error('Sign up error:', error);
      Alert.alert('Error', 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  // 动画样式
  const headerStyle = {
    transform: [{
      translateY: headerAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [-50, 0],
      }),
    }],
    opacity: headerAnimation,
  };

  const formStyle = {
    transform: [{
      translateY: formAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [50, 0],
      }),
    }],
    opacity: formAnimation,
  };

  const fadeStyle = {
    opacity: fadeAnimation,
  };

  return (
    <View style={styles.container}>
      {/* Logo区域 */}
      <Animated.View style={[styles.header, headerStyle]}>
        <View style={{ marginBottom: 20 }}>
          <Logomark width={50} />
        </View>
      </Animated.View>

      {/* 标题区域 */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sign Up For Free</Text>
      </View>

      {/* 表单区域 */}
      <Animated.View style={[styles.formContainer, formStyle]}>
        {/* 邮箱输入框 */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email Address</Text>
          <View style={[styles.inputWrapper, emailError ? styles.inputError : null]}>
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
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}
        </View>

        {/* 密码输入框 */}
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

        {/* 确认密码输入框 */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password Confirmation</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputIcon}>🔒</Text>
            <TextInput
              style={styles.input}
              value={confirmPassword}
              onChangeText={handleConfirmPasswordChange}
              placeholder="Confirm your password"
              secureTextEntry
            />
          </View>
        </View>

        {/* 注册按钮 */}
        <Animated.View style={fadeStyle}>
          <ConfirmedButton
            label={loading ? 'Loading...' : 'Sign Up'}
            onPress={handleSignUp}
            disabled={loading}
          />
        </Animated.View>

        {/* 底部链接 */}
        <Animated.View style={[styles.bottomLinks, fadeStyle]}>
          <Text style={styles.bottomText}>
            Already have an account?{' '}
            <Link href="/(auth)/sign-in" replace={true} style={styles.link}>
              Sign In
            </Link>
          </Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  header: {
    height: '20%',
    backgroundColor: colors.primaryLight,
    width: '100%',
    borderBottomLeftRadius: '25%',
    borderBottomRightRadius: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  titleContainer: {
    margin: 20,
  },
  title: {
    fontSize: typography.presets.h1.fontSize,
    fontWeight: typography.presets.h1.fontWeight,
    color: colors.text.primary,
    textAlign: 'center',
    letterSpacing: -0.3,
    lineHeight: 38,
    fontFamily: "Urbanist-ExtraBold",
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
    color: colors.text.primary,
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.secondary,
    borderRadius: 25,
    padding: 12,
  },
  inputError: {
    borderColor: colors.error,
    borderWidth: 1,
  },
  inputIcon: {
    marginRight: 10,
    fontSize: 20,
  },
  input: {
    flex: 1,
    fontSize: typography.presets.bodySmall.fontSize,
    color: colors.text.primary,
  },
  errorText: {
    color: colors.error,
    fontSize: typography.presets.bodySmall.fontSize,
    marginTop: 4,
  },
  bottomLinks: {
    alignItems: 'center',
    marginTop: 20,
  },
  bottomText: {
    color: colors.text.secondary,
    fontSize: typography.presets.bodySmall.fontSize,
  },
  link: {
    color: colors.primary,
    textDecorationLine: 'underline',
  },
});