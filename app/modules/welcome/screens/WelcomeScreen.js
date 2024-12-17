// app/welcome.tsx
import { View, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
// 引入logo.svg 图标
import Logomark from '../../../assets/icons/logoMark';
import ConfirmedButton from '../../../components/button/confirmedButtion';
import { colors } from '../../../assets/themes/color';
import { typography } from '../../../assets/themes/typography';
// 默认导出WelcomeScreen组件给外部使用
export default function WelcomeScreen() {
  return (

    <View style={styles.container}>
      {/* Logo样式部分 Logo Section */}
      <View style={styles.logoSection}>
        <Logomark />
      </View>

      {/* 欢迎词Title Section */}


      <Text style={styles.welcomeToTheContainer}>
        <Text style={styles.welcomeToThe}>{`Welcome to `}</Text>
        <Text style={styles.sync}>{`SYNC\n`}</Text>
        <Text style={styles.welcomeToThe}> AI coach companion</Text>
      </Text>


      {/* 产品介绍Description */}
      <Text style={styles.description}>
        Your AI breathing companion{'\n'} for everyone, anywhere 🌱
      </Text>

      {/* Main Illustration */}
      <View style={styles.illustrationContainer}>
        {/* Green character illustration */}
        {/* Floating icons */}
        <Image
          source={require('../../../assets/images/AI-robot-group.png')}
          style={styles.airobotImage}
          resizeMode="contain"  // 或使用 "cover" 或 "stretch"
        />
      </View>

      {/* Action Buttons */}
      <Link href="/modules/auth/screens/SignUpScreen" asChild>
        <ConfirmedButton label="Get Started "  ></ConfirmedButton>
      </Link>

      {/* Sign In Link */}
      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>Already have an account? </Text>
        <Link href="/modules/auth/screens/SignInScreen" asChild >
          <Text style={styles.signInLink}>Sign In</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // 设置容器为全屏，避免出现白边
    flex: 1,
    backgroundColor: colors.background.primary,
    paddingHorizontal: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  logoSection: {
    marginBottom: 24,
  },
  welcomeToThe: {
    color: colors.text.primary
  },
  sync: {
    color: colors.primary
  },
  welcomeToTheContainer: {
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
  // 产品介绍Description图片
  illustrationContainer: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  airobotImage: {
    width: '100%',
    height: '100%',
  },
  // 登录链接
  signInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signInText: {
    fontSize: typography.presets.bodySmallBold.fontSize,
  },
  signInLink: {
    // color: '#946E51',
    fontSize: typography.presets.bodySmallBold.fontSize,
    color: colors.primary,
    textDecorationLine: 'underline',
  },
});