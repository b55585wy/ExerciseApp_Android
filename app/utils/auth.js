// 创建新文件: app/utils/auth.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const setCurrentUser = async (user) => {
  try {
    await AsyncStorage.setItem('currentUser', JSON.stringify(user));
  } catch (error) {
    console.error('Error saving current user:', error);
  }
};

const getCurrentUser = async () => {
  try {
    const user = await AsyncStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};

const logout = async () => {
  try {
    await AsyncStorage.removeItem('currentUser');
  } catch (error) {
    console.error('Error logging out:', error);
  }
};

export default {
  setCurrentUser,
  getCurrentUser,
  logout,
};
