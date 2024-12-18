import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import typography from '../assets/themes/typography';
import colors from '../assets/themes/color';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Path, LinearGradient, Stop, Defs } from 'react-native-svg';

export const SplashScreen = () => {
  // 定义动画值
  const translateY = useSharedValue(-200);  // logo的垂直位移
  const opacity = useSharedValue(0);        // logo的透明度
  const textScaleY = useSharedValue(1);     // 文字的垂直缩放
  const subtitleScaleY = useSharedValue(1); // 副标题的垂直缩放

  useEffect(() => {
    // 启动动画序列
    // 1. logo淡入动画
    opacity.value = withTiming(1, { duration: 1000 });
    // 2. logo从上方弹入
    translateY.value = withSpring(0, {
      damping: 8,      // 阻尼：控制弹簧的"阻力"，值越大，弹性越小，动画越快停止
      stiffness: 100,  // 刚度：控制弹簧的"紧实度"，值越大，弹簧力越强，动画越快
      mass: 1,         // 质量：影响动画的惯性，值越大，动画越慢，弹性效果越明显
    });

    // 3. "SYNC"文字的弹跳动画
    textScaleY.value = withSequence(
      withTiming(0.7, { duration: 100 }), // 先压缩
      withSpring(1, { damping: 4, stiffness: 80 }) // 再弹回
    );

    // 4. 延迟100ms后执行副标题的弹跳动画
    setTimeout(() => {
      subtitleScaleY.value = withSequence(
        withTiming(0.7, { duration: 100 }),
        withSpring(1, { damping: 4, stiffness: 80 })
      );
    }, 100);
  }, []);

  // 定义动画样式
  const logoAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  const textAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scaleY: textScaleY.value }],
  }));

  const subtitleAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scaleY: subtitleScaleY.value }],
  }));

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Animated.View style={[logoAnimatedStyle]}>
          <Svg width="41" height="85" viewBox="0 0 41 85" style={styles.logo}>
            <Defs>
              <LinearGradient id="logoGradient" x1="0" y1="0" x2="0" y2="1">
                <Stop offset="0.25" stopColor="#EB5C1F" />
                <Stop offset="0.25" stopColor="#4f3422" />
              </LinearGradient>
            </Defs>
            <Path
              d="M19.8492 70.3721C19.8492 66.2868 23.4937 63.1899 27.2683 63.1899H35.273C38.527 63.1899 41 60.4884 41 57.3915V49.0891C41 45.7946 38.3317 43.2907 35.273 43.2907H26.7476C22.7127 43.2907 19.654 39.6008 19.654 35.7791V27.0814C19.654 22.9961 23.2984 19.8992 27.073 19.8992H35.273C38.527 19.8992 41 17.3953 41 14.1008V5.79845C41 2.50388 38.3317 0 35.273 0H27.3333C24.0794 0 21.6063 2.70155 21.6063 5.79845V14.1008C21.6063 17.9884 18.5476 21.6124 14.5127 21.6124H5.92222C2.66825 21.6124 0 24.314 0 27.4109V35.7132C0 39.0078 2.66825 41.5116 5.92222 41.5116H14.1222C17.9619 41.5116 21.5413 44.6085 21.5413 48.6938V57.5891C21.5413 61.4767 18.4825 65.1008 14.4476 65.1008H5.92222C2.66825 65.1008 0 67.8023 0 70.8992V79.0039C0 82.2984 2.66825 85 5.92222 85H14.1222C17.3762 85 20.0444 82.2984 20.0444 79.0039V70.3062H19.8492V70.3721Z"
              fill="url(#logoGradient)"
            />
          </Svg>
        </Animated.View>

        <Animated.Text style={[styles.SYNCContainer, styles.sync]}>
          SYNC
        </Animated.Text>

        <Animated.Text style={[styles.description, subtitleAnimatedStyle]}>
          Your AI breathing companion{'\n'} for everyone, anywhere 🌱
        </Animated.Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background.primary,
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    marginBottom: 20,
  },
  title: {
    fontSize: typography.presets.h1.fontSize,
    fontWeight: typography.presets.h1.fontWeight,
    color: typography.presets.h1.color,
    marginTop: 16,
  },
  subtitle: {
    fontSize: typography.presets.bodySmallBold.fontSize,
    color: colors.text.secondary,
    marginTop: 8,
    fontWeight: typography.presets.bodySmallBold.fontWeight,

  },

  welcomeToThe: {
    color: colors.text.primary
  },
  sync: {
    color: colors.primary
  },
  SYNCContainer: {
    alignSelf: "stretch",
    fontSize: typography.presets.h1.fontSize,
    letterSpacing: -0.3,
    lineHeight: 38,
    fontWeight: "800",
    fontFamily: "Urbanist-ExtraBold",
    textAlign: "center"
  },
  description: {
    fontSize: typography.presets.body.fontSize,
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: 32,
  },
});
export default SplashScreen;