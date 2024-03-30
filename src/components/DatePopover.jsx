import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    Button,
  } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { CalendarIcon } from '@chakra-ui/icons';
import Calendar from "./Calendar";

function DatePopover(){
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    const [taskMonth, setTaskMonth] = useState('');
    const [taskDay, setTaskDay] = useState('');
    const [word, setWord] = useState('')

    const getTaskMonth = (month) => {
        setTaskMonth(month);
    };

    const getTaskDay = (day) => {
        setTaskDay(day);
    };

    useEffect(() => {
        if(taskMonth === '' || taskDay === '' || taskDay === null || taskMonth === null) setWord('No Date')
        else if (currentMonth === taskMonth && currentDay === taskDay) setWord('Today');
        else if (currentMonth === taskMonth && currentDay + 1 === taskDay) setWord('Tomorrow');
        else if ((currentMonth === taskMonth && currentDay + 7 === taskDay) || (currentMonth + 1 === taskMonth && currentDay - taskDay >= 24)) setWord('Next Week');
        else{
            const months = [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ];

            setWord(`${months[taskMonth]} ${taskDay}`); // Update state based on the determined word
        }

      }, [currentMonth, currentDay, taskMonth, taskDay]); // Include dependencies in the dependency array
      


    

    return(
        <Popover>
            <PopoverTrigger>
            <Button
                leftIcon={<CalendarIcon />}
                bg='none'
                borderWidth="1px"
                borderColor="gray.400"
                color={word === 'Tomorrow' ? 'orange.400' : word === 'Today' ? 'green.400' : word === 'Next Week' ? 'purple.400' : 'gray.400'}
            >
            {word}
            </Button>
            </PopoverTrigger>
            <PopoverContent>
                <Calendar year={2024} getTaskMonth={getTaskMonth} getTaskDay={getTaskDay}/>  
            </PopoverContent>
        </Popover>
    );
}

export default DatePopover;