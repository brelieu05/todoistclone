import { CheckCircleIcon } from "@chakra-ui/icons";
import { Text, HStack, Button, IconButton, Spacer, VStack} from "@chakra-ui/react";
function Task({task, description, index, deleteTask }){
  return(
    <HStack w="4xl"  pb='3'>
      <IconButton
      icon={<CheckCircleIcon boxSize={{ base: 10, md: 5 }} />}
      isRound={true}
      variant='outline'
      size='xs'
      bg="transparent"

      onClick={() => {deleteTask(index)}}
    />  
      <VStack alignItems="flex-start">
        <Text color='white' fontSize='lg'>{task.task}</Text>   
        <Text color='white' fontSize='lg'>{task.description}</Text> 
      </VStack>
          
      <Spacer/>
    </HStack>
  );
}

export default Task;