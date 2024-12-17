const typography = {
  // 字体家族
  fonts: {
    regular: 'System',  // 或其他自定义字体
    medium: 'System',
    bold: 'System',
  },

  // 字体大小
  sizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 32,
  },

  // 文字样式预设
  presets: {
    // 标题
    h1: {
      fontSize: 32,
      fontWeight: 'bold',
      lineHeight: 40,
      color: '#4f3422'
    },
    h2: {
      fontSize: 28,
      fontWeight: 'bold',
      lineHeight: 36,
    },
    h3: {
      fontSize: 24,
      fontWeight: '600',
      lineHeight: 32,
    },
    
    // 正文
    body: {
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 24,
    },
    bodySmall: {
      fontSize: 14,
      lineHeight: 20,
    },
    bodySmallBold: {
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '600',
    },
    
    // 标签
    label: {
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 24,
    },
    labelSmall: {
      fontSize: 14,
      fontWeight: '500',
      lineHeight: 20,
    },
  }
};

export default typography;