import { Modal } from "native-base";

interface ListModalProps {
  listModalVisible: boolean;
  onClose: () => void;
}

export default function PillListModal({
  listModalVisible,
  onClose,
}: ListModalProps) {
  return (
    <Modal isOpen={listModalVisible} onClose={onClose}>
      <Modal.Content maxWidth="400px" height="600px" bgColor="cyan.600">
        <Modal.CloseButton />
        <Modal.Header>등록할 약을 선택하세요</Modal.Header>
      </Modal.Content>
    </Modal>
  );
}
