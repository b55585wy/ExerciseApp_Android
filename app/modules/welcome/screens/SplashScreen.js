import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Path, LinearGradient, Stop, Defs } from 'react-native-svg';

export const SplashScreen = () => {
  const translateY = useSharedValue(-200); // 从屏幕上方开始
  const opacity = useSharedValue(0);

  useEffect(() => {
    // 淡入效果
    opacity.value = withTiming(1, { duration: 500 });
    // 下落并弹跳效果
    translateY.value = withSpring(0, {
      damping: 8, // 弹性阻尼
      stiffness: 100, // 刚度
      mass: 1, // 质量
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.content, animatedStyle]}>
        {/* Logo */}
        <Svg width="41" height="85" viewBox="0 0 41 85" style={styles.logo}>
          <Path
            d="M19.8492 70.3721C19.8492 66.2868 23.4937 63.1899 27.2683 63.1899H35.273C38.527 63.1899 41 60.4884 41 57.3915V49.0891C41 45.7946 38.3317 43.2907 35.273 43.2907H26.7476C22.7127 43.2907 19.654 39.6008 19.654 35.7791V27.0814C19.654 22.9961 23.2984 19.8992 27.073 19.8992H35.273C38.527 19.8992 41 17.3953 41 14.1008V5.79845C41 2.50388 38.3317 0 35.273 0H27.3333C24.0794 0 21.6063 2.70155 21.6063 5.79845V14.1008C21.6063 17.9884 18.5476 21.6124 14.5127 21.6124H5.92222C2.66825 21.6124 0 24.314 0 27.4109V35.7132C0 39.0078 2.66825 41.5116 5.92222 41.5116H14.1222C17.9619 41.5116 21.5413 44.6085 21.5413 48.6938V57.5891C21.5413 61.4767 18.4825 65.1008 14.4476 65.1008H5.92222C2.66825 65.1008 0 67.8023 0 70.8992V79.0039C0 82.2984 2.66825 85 5.92222 85H14.1222C17.3762 85 20.0444 82.2984 20.0444 79.0039V70.3062H19.8492V70.3721Z"
            fill="#EB5C1F"
          />
        </Svg>

        {/* SYNC Text */}
        <Text style={styles.title}>SYNC</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>AI Hardware for You</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginTop: 8,
  },
});
export default SplashScreen;