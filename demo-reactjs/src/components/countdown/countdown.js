import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import './countdown.css'

function Countdown() {
  const [time, setTime] = useState(60);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className='wrapper-timer'>
        <TextField className='timer-title' id="standard-basic" label="Timer" variant="standard" value={time} />
        <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={() => setTimerOn(true)}>Start</Button>
            <Button variant="outlined" onClick={() => setTime(60)}>Reset</Button>
        </Stack>
    </div>
  );
}

export default Countdown;