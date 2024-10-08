import {
  Alert,
  Box,
  Center,
  CloseIcon,
  HStack,
  IconButton,
  Modal,
  Text,
  VStack,
} from "native-base";

interface EmptyAlertProps {
  onClose: () => void;
}

export default function EmptyAlert({ onClose }: EmptyAlertProps) {
  return (
    <Alert position="absolute" w="80%" h="30%">
      <VStack
        space={2}
        flexShrink={1}
        maxWidth="250px"
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <HStack
          flexShrink={1}
          space={2}
          alignItems="center"
          justifyContent="center"
        >
          <HStack flexShrink={1} space={2}>
            <Alert.Icon />
            <Text
              fontSize="md"
              maxW="150px"
              fontWeight="medium"
              color="coolGray.800"
            >
              약을 하나 이상 추가 해주세요!
            </Text>
          </HStack>
          <IconButton
            variant="unstyled"
            _focus={{
              borderWidth: 0,
            }}
            bg="cyan.300"
            borderColor={"light.100"}
            borderWidth={1}
            onPress={onClose}
            icon={<CloseIcon size="3" />}
            _icon={{
              color: "coolGray.600",
            }}
          />
        </HStack>
      </VStack>
    </Alert>
  );
}
