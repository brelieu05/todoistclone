import { CalendarIcon, BellIcon, WarningIcon, EmailIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Stack, Input, Button, HStack, Spacer, Text, IconButton,} from "@chakra-ui/react";
import { useState } from "react";
import DatePicker from 'react-datepicker';

function InputBox({updateButtonPressed, updateTaskArray}) {

  const [taskInput, setTaskInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');

  return (
    <>    
      <Stack>
        <Stack borderWidth="1px" borderColor="gray.400" spacing={4} p={4} rounded="md" width='4xl'>
          <Input
            bg='none'
            placeholder='Add Task'
            color='white'
            sx={{ fontWeight: 'bold', fontSize: 'lg'}}
            onChange={(e) => setTaskInput(e.target.value)}
            
          />
          <Input
            bg='none'
            placeholder='Description'
            sx={{fontSize: 'lg' }}
            color='white'
            onChange={(e) => setDescriptionInput(e.target.value)}
          />
          <HStack>
            <Button leftIcon={<CalendarIcon/>} bg='none' color='green.400' borderWidth="1px" borderColor="gray.400">Today</Button>
            <Button leftIcon={<BellIcon/>} bg='none' color='gray.400' borderWidth="1px" borderColor="gray.400" aria-label="Reminder">Reminders</Button>
            <Button leftIcon={<WarningIcon/>} bg='none' color='gray.400' borderWidth="1px" borderColor="gray.400">Priority</Button>
            <Button bg='none' color='gray.400' borderWidth="1px" borderColor="gray.400">...</Button>
          </HStack>
          
        </Stack>
        <HStack borderWidth="1px" borderColor="gray.400" spacing={4} p={4} rounded="md" width='4xl' display='flex'>
          <Button bg='none' color='white' rightIcon={<ChevronDownIcon/>} leftIcon={<EmailIcon/> }>Inbox</Button>
          <Spacer />
          <Button bg='none' color='white' onClick={() => {
            updateButtonPressed(false);
          }}>Cancel</Button>
          <Button colorScheme='red' onClick={() => {
            const newTask = {
              task: taskInput,
              description: descriptionInput,
            };
            updateTaskArray(newTask);
            updateButtonPressed(false);
          }}>Add Task</Button>
        </HStack>
      </Stack>
    </>
  );

}

export default InputBox;