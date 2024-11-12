import React from "react";
import { Button } from "react-native-paper";

interface DefaultButtonProps {
  text: string; // 버튼의 텍스트
  backgroundColor?: string; // 배경색 (옵션)
  textColor?: string; // 글자색 (옵션)
  onPress: () => void; // 클릭 시 실행되는 함수
}

const DefaultButton: React.FC<DefaultButtonProps> = ({
  text,
  backgroundColor = "#6200ee", // 기본 배경색은 #6200ee
  textColor = "#ffffff", // 기본 글자색은 흰색
  onPress,
}) => {
  return (
    <Button
      style={{ backgroundColor }} // 유동적으로 배경색 설정
      textColor={textColor} // 유동적으로 글자색 설정
      onPress={onPress} // 버튼 클릭 시 onPress 함수 실행
    >
      {text}
    </Button>
  );
};

export default DefaultButton;
