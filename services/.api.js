// 创建新文件: app/services/api.js
// 目前还没有用到
// 开发环境使用本地存储,生产环境使用服务器
const BASE_URL = __DEV__ ? 'http://localhost:3000/api' : 'https://your-production-api.com/api';

const api = {
  async login(email, password) {
    if (__DEV__) {
      // 开发环境使用本地存储
      return localLogin(email, password);
    } else {
      // 生产环境使用服务器
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      return response.json();
    }
  },
  
  async register(userData) {
    if (__DEV__) {
      // 开发环境使用本地存储
      return localRegister(userData);
    } else {
      // 生产环境使用服务器
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      return response.json();
    }
  }
};
export default api;