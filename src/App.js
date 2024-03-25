import { VStack, Text, Input, Button, HStack, Stack, Spacer} from '@chakra-ui/react';
import './App.css';
import { useState } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { IconButton, CalendarIcon} from '@chakra-ui/react'
import InputBox from './components/InputBox';
import Task from './components/Task';
function App() {

  const [buttonPressed, setButtonPressed] = useState(false);
  const [tasks, setTasks] = useState([]);

  const updateButtonPressed = (value) => {
    setButtonPressed(value);
  };

  const updateTaskArray = (value) => {
    setTasks([...tasks, value]);
  };

  const deleteTask = (index) => {
    let filtered = tasks.filter((task, idx) => {
      return idx !== index; // Exclude the task at the given index
    });
    setTasks(filtered);
  };

  return (
    <VStack h='100vh' bg='#1e1e1e'>   
      <Stack pt='10'  w='4xl'>
      <Text fontSize='5xl' as='b' color='white'>Today</Text>
      
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} index={index} task={task} deleteTask={deleteTask}/>
        ))}
      </ul>
      {buttonPressed ? 
        <InputBox updateButtonPressed={updateButtonPressed} updateTaskArray={updateTaskArray}/>
        :
        <HStack>
            <IconButton icon={<AddIcon />} onClick={() => setButtonPressed(true)} variant='outline' colorScheme='red' isRound={true} sx={{ border: 'none', bg: 'transparent', '&:hover': { bg: 'red.400', color:"white" }, }}/>
            <Text onClick={() => setButtonPressed(true)} fontSize='lg' color='gray' sx={{ border: 'none', bg: 'transparent', '&:hover': { color:"red.400" }, }}>Add Task </Text>
        </HStack>
      }
      </Stack>
    </VStack>
  );
}

export default App;