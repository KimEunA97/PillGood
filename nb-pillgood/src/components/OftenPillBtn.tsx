import { Box, Button, HStack, Text } from "native-base";

interface OftenPillBtnProps {
  ChoosenOftenPill: (pill: string) => void;
}

export default function OftenPillBtn({ ChoosenOftenPill }: OftenPillBtnProps) {
  const oftenPill = ["비타민", "오메가3", "아니", "근데", "칼슘"];

  return (
    <Box>
      <HStack
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap" // 버튼을 넘칠 때 줄바꿈
        width="100%" // 전체 너비 차지
        space={2}
        mb={2}
      >
        {oftenPill.map((pill) => (
          <Button
            key={pill}
            colorScheme="violet"
            size="sm"
            onPress={() => ChoosenOftenPill(pill)}
          >
            <Text color="white" style={{ fontWeight: "bold", fontSize: 12 }}>
              {pill}
            </Text>
          </Button>
        ))}
      </HStack>
    </Box>
  );
}
