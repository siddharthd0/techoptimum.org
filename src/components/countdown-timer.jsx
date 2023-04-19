import { useState } from 'react';
import { Box, Center, Flex, Text } from '@chakra-ui/react';

const TIMER_CONTENT = {
  date_start: "June 15th",
  timer_text: "June 15th - 19th, 2023"
}

export default function CountDownTimer(){
  let year = new Date().getFullYear();
  const difference = +new Date(`06/15/${year}`) - +new Date();

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const timer = setTimeout(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if(!timeLeft[interval]){
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    )
  })

  return (
    <Box w='100%' h='200px' bgGradient='linear(to-b, #1E1E1E 25%, #434b70)'>
      <Center w='100%' h='200px'>
        <Flex flexDirection='column' color='#a7b2ff'>
          <Text p='3' mt='' fontSize='5xl'>
            {
              timerComponents.length ? timerComponents : 'It\'s time!'
            }
          </Text>
          <Text fontSize='xl' as='b' textAlign='center'>{TIMER_CONTENT.timer_text}</Text>
        </Flex>
      </Center>
    </Box>
  )
}

export const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  const difference = +new Date(`06/15/${year}`) - +new Date();

  let timeLeft = {};

  if(difference > 0){
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }
  }
  return timeLeft;
}