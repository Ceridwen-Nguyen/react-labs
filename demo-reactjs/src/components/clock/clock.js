import React, { useState, useEffect } from 'react';
import './clock.css';

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return function cleanup() {
            clearInterval(timerID);
        };
    });

    return (
        <div className='clock-content'>
            <div className='clock-greeting'>Hello, I am Clock</div>
            <div className='clock-notification'>Now is {time.toLocaleTimeString()}</div>
        </div>
    );
}

export default Clock;