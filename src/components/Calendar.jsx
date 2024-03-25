
import { Box, Text, Input, Button, VStack} from "@chakra-ui/react";
import { useState } from "react";
import { SunIcon, ArrowRightIcon, ArrowForwardIcon, ChevronRightIcon } from "@chakra-ui/icons";

function Calendar(){
    const currentDate = new Date();
    const dateArray = currentDate.toDateString().split(' ');
    const month = dateArray[1];
    const day = dateArray[2];

    const [monthDay, setMonthDay] = useState(month + " " + day)

    return(
        <Box color='white' border='1px solid white' w='48' h='96' borderRadius='lg' borderColor='gray.400'>
            <Input bg='none' borderRadius='lg' w='48' fontSize='10' pl='2' value={monthDay}/>
            <VStack gap='1'>
                <Button leftIcon={<SunIcon/>} bg='none' color='orange' borderRadius='none' w='48' h='6' justifyContent='flex-start' fontSize='10'>Tomorrow</Button>
                <Button leftIcon={<ChevronRightIcon/>} bg='none' color='purple.400' borderRadius='none' w='48' h='6' justifyContent='flex-start' fontSize='10'>Later this week</Button>
                <Button leftIcon={<ArrowForwardIcon/>} bg='none' color='blue.400' borderRadius='none' w='48' h='6' justifyContent='flex-start' fontSize='10'>This weekend</Button>
                <Button leftIcon={<ArrowRightIcon/>} bg='none' color='purple.400' borderRadius='none' w='48' h='6' justifyContent='flex-start' fontSize='10'>Next week</Button>
                <Button bg='none' color='gray.400' borderRadius='none' w='48' h='6' justifyContent='flex-start' fontSize='10'>No date</Button>

            </VStack>
            <Box>

            </Box>
        </Box>
    );
}

export default Calendar;