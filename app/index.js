import React, { useState, useEffect } from 'react';
import { Redirect } from 'expo-router';
import SplashScreen from './modules/welcome/screens/SplashScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

//index作为入口文件，重定向到welcome页面
export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 检查登录状态
    const checkLoginStatus = async () => {
      try {
        const currentUser = await AsyncStorage.getItem('currentUser');
        setIsLoggedIn(!!currentUser);
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };

    // 模拟加载过程并检查登录状态
    const timer = setTimeout(() => {
      checkLoginStatus();
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  // 根据登录状态重定向
  if (isLoggedIn) {
    return <Redirect href="./modules/main/screens/HomeScreen" />;
  }
  
  return <Redirect href="./modules/welcome/screens/WelcomeScreen" />;
}


