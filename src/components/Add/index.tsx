import uuid from "react-uuid";

import { Stack, Input, Button, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/task";
import { AddIcon } from "@chakra-ui/icons";

export const Add = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const handleSubmit = () => {
    dispatch(
      addTask({
        id: uuid(),
        name: value,
        status: "in-process",
        order: 1,
        createAt: new Date(),
      }),
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={5}>
        <Button
          type="submit"
          colorScheme="teal"
          variant="outline"
          rightIcon={<AddIcon />}
        >
          Add new Task
        </Button>
        <Input
          mt={5}
          value={value}
          variant="outline"
          type="text"
          placeholder="Task name..."
          onChange={(e) => setValue(e.target.value)}
        />
        <Textarea placeholder="Here is a sample placeholder" />
      </Stack>
    </form>
  );
};
