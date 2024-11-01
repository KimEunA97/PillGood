import {
  Button,
  ButtonGroup,
  ButtonSpinner,
  ButtonText,
} from "components/ui/button";
import { Modal } from "components/ui/modal";

export default function TodayPillPage() {
  return (
    <div>
      <Button
        size="md"
        variant="solid"
        action="default"
        // style={{ backgroundColor: "blue" }}
      >
        <ButtonSpinner />
        <ButtonText>Hello World!</ButtonText>
      </Button>
      {/* <Modal>asd</Modal> */}
    </div>
  );
}
