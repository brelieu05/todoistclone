import { CheckCircleIcon } from "@chakra-ui/icons";
import { Text, HStack, Button, IconButton, Spacer, Stack, Box, Flex, Grid} from "@chakra-ui/react";
function Task({task, description, index, deleteTask }){
  return(
    <Stack>
      <Flex alignItems="center">
        <IconButton
          icon={<CheckCircleIcon boxSize={{ base: 10, md: 5 }} />}
          isRound={true}
          variant="outline"
          size="xs"
          bg="transparent"
          onClick={() => deleteTask(index)}
          mr={3} // Add margin-right to separate button from text
        />

        <Text color="white" fontSize="lg" fontWeight="bold">
          {task.task}
        </Text>
      </Flex>
      <Text color='white' fontSize='sm' pl='36px'>
        {task.description}
      </Text>
    </Stack>
  );
}

export default Task;