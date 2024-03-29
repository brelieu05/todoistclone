
import { Box, Text, Input, Button, VStack, HStack, Grid} from "@chakra-ui/react";
import { useState, useCallback, useMemo } from "react";
import { SunIcon, ArrowRightIcon, ArrowForwardIcon, ChevronRightIcon, NotAllowedIcon } from "@chakra-ui/icons";
import { Global } from '@emotion/react';


function Calendar({ year }) {
  const monthDay = new Date();
  const [clickedDay, setClickedDay] = useState(null);
  const [clickedMonth, setClickedMonth] = useState(null);

  const handleButtonClick = useCallback((day, month) => {
    setClickedDay(day);
    setClickedMonth(month);
  }, []);

  const renderDates = useMemo(() => {
    const currentMonth = monthDay.getMonth();
    const currentYear = year;

    const dates = [];

    for (let month = currentMonth; month < currentMonth + 12; month++) {
      const firstDayOfMonth = new Date(currentYear, month, 1).getDay();
      const daysInMonth = new Date(currentYear, month + 1, 0).getDate();

      let dayCounter = 1;

      for (let day = 0; day < firstDayOfMonth; day++) {
        dates.push(<Box key={`empty-${month}-${day}`} flexBasis='14.28%' />);
      }

      for (let day = 1; day <= daysInMonth; day++) {
        const isClicked = clickedDay === day && clickedMonth === month;
        dates.push(
          <Button
            key={`${month}-${day}`}
            onClick={() => handleButtonClick(day, month)}
            fontSize='10'
            fontWeight='bold'
            bg={isClicked ? 'red.500' : 'transparent'}
            color='white'
            rounded='full'
            size='xs'
            _active={{ bg: 'red.600' }}>
            {day}
          </Button>
        );
        dayCounter++;
      }

      while (dayCounter % 7 !== 1) {
        dates.push(<Box key={`empty-${month}-${dayCounter}`} flexBasis='14.28%' />);
        dayCounter++;
      }
    }

    return dates;
  }, [clickedDay, clickedMonth, handleButtonClick, monthDay, year]);
  
  
  
    return(
      <Box color='white' border='1px solid white' w='48' h='96' borderRadius='lg' borderColor='gray.400' bg='#262626'>
            <Input bg='none' borderRadius='lg' w='48' fontSize='10' pl='2' value={monthDay.toDateString().split(' ')[1] + " " + monthDay.getDate()} readOnly/>
            <VStack gap='1'>
                <Button leftIcon={<SunIcon/>} bg='none' color='orange' borderRadius='none' w='48' h='6' justifyContent='flex-start' fontSize='10'>Tomorrow</Button>
                <Button leftIcon={<ChevronRightIcon/>} bg='none' color='purple.400' borderRadius='none' w='48' h='6' justifyContent='flex-start' fontSize='10'>Later this week</Button>
                <Button leftIcon={<ArrowForwardIcon/>} bg='none' color='blue.400' borderRadius='none' w='48' h='6' justifyContent='flex-start' fontSize='10'>This weekend</Button>
                <Button leftIcon={<ArrowRightIcon/>} bg='none' color='purple.400' borderRadius='none' w='48' h='6' justifyContent='flex-start' fontSize='10'>Next week</Button>
                <Button leftIcon={<NotAllowedIcon/>}bg='none' color='gray.400' borderRadius='none' w='48' h='6' justifyContent='flex-start' fontSize='10'>No date</Button>
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
                  {renderDates}
                </Grid>
            </Box>
      </Box>
    );
}

export default Calendar;