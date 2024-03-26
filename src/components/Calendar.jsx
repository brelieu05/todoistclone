
import { Box, Text, Input, Button, VStack, HStack, Grid} from "@chakra-ui/react";
import { useState } from "react";
import { SunIcon, ArrowRightIcon, ArrowForwardIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Global } from '@emotion/react';


function Calendar({year}){
  
  const [monthDay, setMonthDay] = useState(new Date());
  const [clickedDay, setClickedDay] = useState(null);
  const [clickedMonth, setClickedMonth] = useState(null);
  const handleButtonClick = (day, month) => {
    setClickedDay(day);
    setClickedMonth(month);
  };

  const renderDates = () => {
    let dates = [];
    for (let month = 0; month < 12 - monthDay.getMonth(); month++) {

      var firstDayOfMonth = new Date(year, monthDay.getMonth() + month, 1).getDay(); // Get the weekday of the first day
      var daysInMonth = new Date(year, monthDay.getMonth() + 1 + month, 0).getDate(); // Get the number of days in the current month

      let dayCounter = firstDayOfMonth;
      // Add placeholders for empty days before the first day of the month
      for (let empty = 0; empty < firstDayOfMonth; empty++) {
        dates.push(<Box key={`empty-${monthDay.getMonth()}-${empty}`} flexBasis='14.28%' />);
      }
      // Render actual days
      
      for (let day = 1; day <= daysInMonth; day++) {
        dates.push(
          <Button 
            key={`${month}, ${day}`} 
            onClick={() => handleButtonClick(day, month)} 
            textAlign='center' 
            fontSize='7' 
            fontWeight='bold' 
            bg={(clickedDay === day && clickedMonth === month) ? 'red.500' : 'transparent'} 
            color='white' 
            rounded='full' 
            size='xs'
            _active={{ bg: 'red.600' }}> 
            {day}
          </Button>
        );
        dayCounter++
      }


      while(dayCounter % 7 !== 0){
        dates.push(<Box key={`empty-${month}, ${dayCounter}`} flexBasis='14.28%' />);
        dayCounter++;
      }
    
      
    }
    return dates;
  };
  
    return(
      <Box color='white' border='1px solid white' w='48' h='96' borderRadius='lg' borderColor='gray.400'>
            <Input bg='none' borderRadius='lg' w='48' fontSize='10' pl='2' value={monthDay.toDateString().split(' ')[1] + " " + monthDay.getDate()} readOnly/>
            <VStack gap='1'>
                <Button leftIcon={<SunIcon/>} bg='none' color='orange' borderRadius='none' w='48' h='6' justifyContent='flex-start' fontSize='10'>Tomorrow</Button>
                <Button leftIcon={<ChevronRightIcon/>} bg='none' color='purple.400' borderRadius='none' w='48' h='6' justifyContent='flex-start' fontSize='10'>Later this week</Button>
                <Button leftIcon={<ArrowForwardIcon/>} bg='none' color='blue.400' borderRadius='none' w='48' h='6' justifyContent='flex-start' fontSize='10'>This weekend</Button>
                <Button leftIcon={<ArrowRightIcon/>} bg='none' color='purple.400' borderRadius='none' w='48' h='6' justifyContent='flex-start' fontSize='10'>Next week</Button>
                <Button bg='none' color='gray.400' borderRadius='none' w='48' h='6' justifyContent='flex-start' fontSize='10'>No date</Button>
            </VStack>
            <Box>
                <Text pl='2' fontSize='12' as='b'>{monthDay.toDateString().split(' ')[1] + " " + monthDay.getDate()}</Text>
                <HStack justifyContent='space-evenly'>
                    <Text fontSize='10' color='gray.400'> S </Text>
                    <Text fontSize='10' color='gray.400'> M </Text>
                    <Text fontSize='10' color='gray.400'> T </Text>
                    <Text fontSize='10' color='gray.400'> W </Text>
                    <Text fontSize='10' color='gray.400'> T </Text>
                    <Text fontSize='10' color='gray.400'> F </Text>
                    <Text fontSize='10' color='gray.400'> S </Text>
                </HStack>
                <Global
                styles={{
                  // Hide scrollbar while still allowing scrolling
                  '.scrollable-container': {
                    overflow: 'auto',
                    scrollbarWidth: 'none', // Firefox
                    '-ms-overflow-style': 'none', // IE 10+
                    '&::-webkit-scrollbar': {
                      display: 'none', // Chrome, Safari, Opera
                    },
                  },
                }}
              />
                <Grid templateColumns='repeat(7, 1fr)'justifyContent='space-evenly' className="scrollable-container" maxHeight="180px">
                  {renderDates()}
                </Grid>
            </Box>
      </Box>
    );
}

export default Calendar;