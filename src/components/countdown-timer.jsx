// countdown from DD Days, HH Hours, MM Minute, ss Seconds
// June 15th-19th, 2023

import {useState, useEffect} from 'react';

const TIMER_CONTENT = {
  date_start: "June 15th",
  timer_text: "June 15th-19th, 2023"
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
    <div>
      <p>Difference in time</p>
      {timerComponents.length ? timerComponents : <span>Time&apos Up!</span>}
    </div>
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