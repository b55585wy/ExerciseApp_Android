// app/welcome.tsx
import { View, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
// 引入logo.svg 图标
import Logomark from '../../../assets/icons/logoMark';
import ConfirmedButton from '../../../components/button/confirmedButtion';

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
        Your AI breathing companion for everyone, anywhere 🌱
      </Text>

      {/* Main Illustration */}
      <View style={styles.illustrationContainer}>
        {/* Green character illustration */}
        {/* Floating icons */}
      </View>

      {/* Action Buttons */}
      <Link href="/modules/healthAssessment/screens/InfoScreen" asChild>
        <ConfirmedButton label="Get Started"  ></ConfirmedButton>
      </Link>

      {/* Sign In Link */}
      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>Already have an account? </Text>
        <Link href="/modules/main/screens/HomeScreen">
          <Text style={styles.signInLink}>Sign In</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  logoSection: {
    marginBottom: 24,
  },
  welcomeToThe: {
    color: "#4f3422"
  },
  sync: {
    color: "#EB5C1F"
  },
  welcomeToTheContainer: {
    alignSelf: "stretch",
    fontSize: 30,
    letterSpacing: -0.3,
    lineHeight: 38,
    fontWeight: "800",
    fontFamily: "Urbanist-ExtraBold",
    textAlign: "center"
  },
  description: {
    fontSize: 16,
    color: '#666',
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
  // 登录链接
  signInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signInText: {
    color: '#666',
    fontSize: 14,
  },
  signInLink: {
    color: '#946E51',
    fontSize: 14,
    fontWeight: '600',
  },
});