import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    Button,
  } from '@chakra-ui/react'

import { CalendarIcon } from '@chakra-ui/icons';
import Calendar from "./Calendar";

function DatePopover(){
    return(
        <Popover>
            <PopoverTrigger>
                <Button leftIcon={<CalendarIcon/>} bg='none' color='green.400' borderWidth="1px" borderColor="gray.400">Today</Button>
            </PopoverTrigger>
            <PopoverContent>
                <Calendar year={2024}/>  
            </PopoverContent>
        </Popover>
    );
}

export default DatePopover;