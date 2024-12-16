import { Redirect } from 'expo-router';

//index作为入口文件，重定向到welcome页面
export default function Index() {
  return <Redirect href="modules/welcome/screens/WelcomeScreen" />;
}

