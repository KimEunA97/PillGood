import {
  Alert,
  Box,
  Center,
  CloseIcon,
  HStack,
  Modal,
  Text,
  VStack,
} from "@gluestack-ui/themed";

interface EmptyAlertProps {
  onClose: () => void;
}

export default function EmptyAlert({ onClose }: EmptyAlertProps) {
  return (
    <Alert position="absolute" w="80%" h="30%">
      <VStack
        flexShrink={1}
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <HStack flexShrink={1} alignItems="center" justifyContent="center">
          <HStack flexShrink={1}>
            <Alert.Icon />
            <Text fontWeight="medium" color="coolGray.800">
              약을 하나 이상 추가 해주세요!
            </Text>
          </HStack>
          {/* <IconButton
            variant="unstyled"
            _focus={{
              borderWidth: 0,
            }}
            bg="cyan.300"
            borderColor={"light.100"}
            borderWidth={1}
            onPress={onClose}
            icon={<CloseIcon />}
            _icon={{
              color: "coolGray.600",
            }}
          /> */}
        </HStack>
      </VStack>
    </Alert>
  );
}
