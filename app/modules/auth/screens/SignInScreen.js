import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Animated } from 'react-native';
import { Link } from 'expo-router';
import ConfirmedButton from '../../../components/button/confirmedButtion';
import { colors } from '../../../assets/themes/color';
import Logomark from '../../../assets/icons/logoMark';
import { typography } from '../../../assets/themes/typography';
export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const headerAnimation = new Animated.Value(0);
  const formAnimation = new Animated.Value(0);
  const fadeAnimation = new Animated.Value(0);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(headerAnimation, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(formAnimation, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

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

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <Animated.View style={[styles.header, headerStyle]}>
        <View style={{marginBottom: 20}}>
          {/* Your Logo Component */}
          <Logomark width={50} />
        </View>
        
      </Animated.View>
      <Text style={styles.title}>Sign In</Text>
      
      {/* Form Section */}
      <Animated.View style={[styles.formContainer, formStyle]}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email Address</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputIcon}>✉️</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
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
              onChangeText={setPassword}
              placeholder="Enter your password"
              secureTextEntry
            />
          </View>
        </View>

        {/* Sign In Button with animation */}
        <Animated.View style={fadeStyle}>
          <ConfirmedButton
            label="Sign In →"
            onPress={() => {/* 处理登录逻辑 */ }}
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
            <Link href="/signup" style={styles.link}>
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
    marginBottom: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  
  title: {
    fontSize: typography.presets.h1.fontSize,
    fontWeight: typography.presets.h1.fontWeight,
    color: colors.background.primary, // bg-100
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
    color: colors.text.secondary, // text-200
    fontSize: typography.presets.bodySmall.fontSize,
  },
  link: {
    color: colors.primary, // primary-100
    textDecorationLine: 'underline',
  },
  forgotPassword: {
    marginTop: 8,
  }

});