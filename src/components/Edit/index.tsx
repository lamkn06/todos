import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/app-hooks";
import { updateTask } from "../../store/task";

interface Props {
  isOpen: boolean;
  onClose(): void;
}

export const Edit = (props: Props) => {
  const { isOpen, onClose } = props;
  const dispatch = useDispatch();

  const { task } = useAppSelector((state) => state.task);

  const {
    register,
    handleSubmit,
    reset,

    formState: { isDirty, isValid, errors },
  } = useForm<{ name: string; description?: string }>({
    mode: "onChange",
  });

  const onSubmit = (payload: { name: string; description?: string }) => {
    if (!task) {
      return;
    }

    dispatch(
      updateTask({
        ...task,
        name: payload.name,
        description: payload.description,
      }),
    );

    onClose();
  };

  const handleOnClose = () => {
    reset();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleOnClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Your Todo</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <FormControl isInvalid={!!errors.name}>
              <Input
                defaultValue={task?.name}
                {...register("name", {
                  required: "This is required",
                })}
                mt={5}
                variant="outline"
                type="text"
                placeholder="Task name..."
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <Textarea
              defaultValue={task?.description}
              placeholder="Task description..."
              {...register("description")}
              mt={3}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="teal"
              mr={3}
              onClick={onClose}
              bgGradient="linear(to-r,#7928ca,  #ff0080)"
            >
              Close
            </Button>
            <Button
              type="submit"
              colorScheme="teal"
              mr={3}
              disabled={!isDirty || !isValid}
              bgGradient="linear(to-r,#7928ca,  #ff0080)"
            >
              Update
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
