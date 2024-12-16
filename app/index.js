import React, { useState, useEffect } from 'react';
import { Redirect } from 'expo-router';
import SplashScreen from './modules/welcome/screens/SplashScreen';

//index作为入口文件，重定向到welcome页面
export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // 模拟加载过程
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3秒后隐藏 splash 屏幕
  }, []);
  if (isLoading) {
    return <SplashScreen />;
  }
  return <Redirect href="modules/welcome/screens/WelcomeScreen" />;
}


