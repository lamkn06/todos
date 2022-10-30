import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useAppSelector } from "../../hooks/app-hooks";

interface Props {
  isOpen: boolean;
  onClose(): void;
}

export const Edit = (props: Props) => {
  const { isOpen, onClose } = props;

  const { task } = useAppSelector((state) => state.task);

  const handleEditSubmit = () => {
    console.log("ss");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Your Todo</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleEditSubmit}>
          <ModalBody>
            <Input
              value={task?.name}
              variant="outline"
              type="text"
              placeholder="Update your todo..."
              onChange={(e) => console.log(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button type="submit" colorScheme="teal" mr={3}>
              Update
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
