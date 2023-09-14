import React, { useEffect, useState } from 'react';
import './world-clock.css';

function WorldClock() {
  const [time, setTime] = useState({});

  const timeZones = {
    India: 5.5,
    California: -7,
    NewYork: -4,
    London: 1,
    Sydney: 10,
    China: 8,
    Tokyo: 9,
    Berlin: 2
  };

  function convertTime(offset) {
    var localTime = new Date();
    const utcTime = localTime.getTime() + (localTime.getTimezoneOffset() * 60000);
    const cityTime = new Date(utcTime + (3600000*offset));
    return cityTime.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'});
  };

  useEffect(() => {
    setInterval(() => {
      let newTimes = {};
      for (let country in timeZones) {
        newTimes[country] = convertTime(timeZones[country]);
      }
      setTime(newTimes);
    }, 1000);
  }, []);

  return (
    <div className="world">
      {Object.keys(time).map((country, index) => (
        <div key={index} className="country">
          <h2 className="name">{country}</h2>
          <p className="time">{time[country]}</p>
        </div>
      ))}
    </div>
  );
}

export default WorldClock;