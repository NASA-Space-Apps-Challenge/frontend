import React, { useState, useEffect } from "react";
import { JulianDate, ClockRange, ClockStep } from "cesium";
import { Viewer, Clock } from "resium";
import ListOfEntities from "./components/ListOfEntities";

export default function App() {
  const [startTime, setStartTime] = useState();
  const [stopTime, setStopTime] = useState();
  const [currentTime, setCurrentTime] = useState();

  const totalSeconds = 60 * 60 * 6;
  const timestepInSeconds = 10;

  useEffect(() => {
    const start = JulianDate.fromDate(new Date());
    setStartTime(start);
    const stop = JulianDate.addSeconds(start, totalSeconds, new JulianDate());
    setStopTime(stop);
    setCurrentTime(start);
  }, [totalSeconds]);

  return (
    <Viewer full>
      <Clock
        startTime={startTime}
        currentTime={currentTime}
        stopTime={stopTime}
        clockRange={ClockRange.LOOP_STOP} // loop when we hit the end time
        clockStep={ClockStep.SYSTEM_CLOCK_MULTIPLIER}
        multiplier={20} // how much time to advance each tick
        shouldAnimate={true} // Animation on by default
      />
      <ListOfEntities
        start={startTime}
        timestepInSeconds={timestepInSeconds}
        totalSeconds={totalSeconds}
      />
    </Viewer>
  );
}
