import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/task";

export const Add = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,

    formState: { isDirty, isValid, errors },
  } = useForm<{ name: string; description?: string }>({
    mode: "onChange",
  });

  const onSubmit = (payload: { name: string; description?: string }) => {
    dispatch(addTask(payload));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={5}>
        <Button
          type="submit"
          colorScheme="teal"
          variant="outline"
          disabled={!isDirty || !isValid}
          rightIcon={<AddIcon />}
        >
          Add new Task
        </Button>
        <FormControl isInvalid={!!errors.name}>
          <Input
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
          placeholder="Task description..."
          {...register("description")}
        />
      </Stack>
    </form>
  );
};
