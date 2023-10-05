import * as Notifications from 'expo-notifications';

// 사용자에게 푸시 알림 허용 요청
const { granted } = await Notifications.requestPermissionsAsync();

// Expo Push Token 가져오기
const expoPushToken = (await Notifications.getExpoPushTokenAsync()).data;
