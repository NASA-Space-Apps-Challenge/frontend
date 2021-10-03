import React from "react";
import { JulianDate, ClockRange, ClockStep } from "cesium";
import { Viewer, Clock } from "resium";
import ListOfEntities from "./components/ListOfEntities";

export default function App() {
  const start = JulianDate.fromDate(new Date());
  const totalSeconds = 60 * 30;
  const stop = JulianDate.addSeconds(start, totalSeconds, new JulianDate());
  const timestepInSeconds = 90;

  return (
    <Viewer geocoder={false} full>
      <Clock
        startTime={start}
        currentTime={start}
        stopTime={stop}
        clockRange={ClockRange.LOOP_STOP} // loop when we hit the end time
        clockStep={ClockStep.SYSTEM_CLOCK_MULTIPLIER}
        multiplier={1} // how much time to advance each tick
        shouldAnimate={true} // Animation on by default
      />
      <ListOfEntities
        start={start}
        timestepInSeconds={timestepInSeconds}
        totalSeconds={totalSeconds}
      />
    </Viewer>
  );
}
