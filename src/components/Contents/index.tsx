import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useCallback } from "react";
import {
  DragDropContext,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
  DropResult,
} from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import {
  onDropTask,
  selectDoneTask,
  selectInProcessTask,
} from "../../store/task";
import { Items } from "../Items";

const getListStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? "#5cf07c55" : "transparent",
  border: isDraggingOver ? "2px dashed #19ff4b" : "none",
  opacity: isDraggingOver ? "0.5" : "1",
});

export const Content = () => {
  const dispatch = useDispatch();
  const inProcessTasks = useSelector(selectInProcessTask);
  const doneTasks = useSelector(selectDoneTask);
  const handleOnDragEnd = useCallback(
    (result: DropResult) => {
      dispatch(onDropTask(result));
    },
    [dispatch],
  );

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <GridItem>
          <Heading size="lg" as="h2" mb={"10px"}>
            In-Process
          </Heading>
          <Droppable droppableId="in-process">
            {(
              provided: DroppableProvided,
              snapshot: DroppableStateSnapshot,
            ) => (
              <Box
                minH={"200px"}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                <Items tasks={inProcessTasks} />
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </GridItem>
        <GridItem>
          <Heading size="lg" as="h2" mb={"10px"}>
            Done
          </Heading>
          <Droppable droppableId="done">
            {(
              provided: DroppableProvided,
              snapshot: DroppableStateSnapshot,
            ) => (
              <Box
                minH={"200px"}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                <Items tasks={doneTasks} />
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </GridItem>
      </DragDropContext>
    </Grid>
  );
};
