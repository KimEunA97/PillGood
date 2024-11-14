module.exports = {
  presets: ["babel-preset-expo"], // Expo의 기본 Babel 프리셋 사용
  env: {
    production: {
      plugins: ["react-native-paper/babel"], // react-native-paper의 babel 플러그인 설정
    },
  },
};
