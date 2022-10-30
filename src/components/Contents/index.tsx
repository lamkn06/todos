import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { selectInProcessTask, selectDoneTask } from "../../store/task";
import { Items } from "../Items";

const getListStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? "#5cf07c55" : "transparent",
  border: isDraggingOver ? "2px dashed #19ff4b" : "none",
  opacity: isDraggingOver ? "0.5" : "1",
});

export const Content = () => {
  const inProcessTasks = useSelector(selectInProcessTask);
  const doneTasks = useSelector(selectDoneTask);

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <DragDropContext onDragEnd={() => undefined}>
        <GridItem>
          <Heading size="lg" as="h2" mb={"10px"}>
            In-Process
          </Heading>
          <Droppable droppableId="droppableInProcess">
            {(provided: any, snapshot: any) => (
              <Box
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                <Items tasks={inProcessTasks} />
              </Box>
            )}
          </Droppable>
        </GridItem>
        <GridItem>
          <Heading size="lg" as="h2" mb={"10px"}>
            Done
          </Heading>
          <Droppable droppableId="droppableDone">
            {(provided: any, snapshot: any) => (
              <Box
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                <Items tasks={doneTasks} />
              </Box>
            )}
          </Droppable>
        </GridItem>
      </DragDropContext>
    </Grid>
  );
};
