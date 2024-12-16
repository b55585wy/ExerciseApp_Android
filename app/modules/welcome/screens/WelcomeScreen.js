// app/welcome.tsx
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
// 引入logo.svg 图标
import logomarkIcon from '../../../assets/images/Logomark.svg';
// 默认导出WelcomeScreen组件给外部使用
export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      {/* Logo样式部分 Logo Section */}
      <View style={styles.logoSection}>
        <View style={styles.logoCircle}>
          <Image source={logomarkIcon} style={styles.logoCircle} />
        </View>
      </View>

      {/* 欢迎词Title Section */}
      <Text style={styles.title}>Welcome to the ultimate</Text>
      <Text style={styles.subtitle}>AI coach companion!</Text>

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
        <Pressable style={styles.getStartedButton}>
          <Text style={styles.buttonText}>Get Started →</Text>
        </Pressable>
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
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  logoSection: {
    marginBottom: 24,
  },
  logoCircle: {
    width: 40,
    height: 40,
    backgroundColor: '#4A321F', // Brown color from design
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#4A321F',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#946E51', // Lighter brown
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
  },
  illustrationContainer: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  getStartedButton: {
    backgroundColor: '#4A321F',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
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