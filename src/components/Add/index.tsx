import { uuid } from "uuidv4";

import { Stack, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/task";

export const Add = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const handleSubmit = () => {
    dispatch(
      addTask({
        id: uuid(),
        name: value,
        status: "in-process",
      }),
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={5}>
        <Input
          mt={5}
          value={value}
          variant="outline"
          type="text"
          placeholder="Enter your todo..."
          onChange={(e) => setValue(e.target.value)}
        />
        <Button colorScheme="teal" type="submit">
          Add Todo
        </Button>
      </Stack>
    </form>
  );
};
