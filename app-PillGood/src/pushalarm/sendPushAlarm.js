import { sendPushNotification } from './pushNotifications'; // 서버에서 푸시 알림 전송 함수

// Expo Push Token으로 푸시 알림 보내기
const message = {
  to: expoPushToken,
  sound: 'default',
  title: '알림 제목',
  body: '알림 내용',
};

sendPushNotification(message); // 서버에서 푸시 알림을 전송하는 함수
