import React, { useState, useEffect } from "react";
import {
  Cartesian3,
  Color,
  JulianDate,
  SampledPositionProperty,
  ClockRange,
  ClockStep,
} from "cesium";
import { Viewer, Entity, Clock } from "resium";
import * as satellite from "satellite.js";

const getPoints = async () => {
  return await fetch("https://api.milkywey.rocks/").then((response) =>
    response.json()
  );
};

const getPosition = (tle_l1, tle_l2, jsDate) => {
  const satrec = satellite.twoline2satrec(tle_l1, tle_l2);
  const positionAndVelocity = satellite.propagate(satrec, jsDate);
  const positionEci = positionAndVelocity.position;
  // var velocityEci = positionAndVelocity.velocity;
  // var observerGd = {
  //   longitude: satellite.degreesToRadians(-122.0308),
  //   latitude: satellite.degreesToRadians(36.9613422),
  //   height: 0.37,
  // };
  const gmst = satellite.gstime(jsDate);

  // var positionEcf = satellite.eciToEcf(positionEci, gmst);
  // var lookAngles = satellite.ecfToLookAngles(observerGd, positionEcf);
  const positionGd = satellite.eciToGeodetic(positionEci, gmst);
  const longitudeRad = positionGd.longitude;
  const latitudeRad = positionGd.latitude;
  // heightRad = positionGd.height;

  return {
    longitude: satellite.degreesLong(longitudeRad),
    latitude: satellite.degreesLat(latitudeRad),
    height: positionGd.height * 1000,
  };
};

let tle_l1 =
  "1 00900U 64063C   21275.38340667  .00000269  00000-0  27775-3 0  9990";
let tle_l2 =
  "2 00900  90.1693  36.2849 0028983  80.6350 341.5474 13.73592980835239";

export default function App() {
  getPoints();
  const [position, setPosition] = useState();
  const [startTime, setStartTime] = useState();
  const [stopTime, setStopTime] = useState();
  const [currentTime, setCurrentTime] = useState();

  useEffect(() => {
    const totalSeconds = 60 * 60 * 6;
    const timestepInSeconds = 10;
    const start = JulianDate.fromDate(new Date());
    setStartTime(start);
    const stop = JulianDate.addSeconds(start, totalSeconds, new JulianDate());
    setStopTime(stop);
    setCurrentTime(start);
    const positionsOverTime = new SampledPositionProperty();

    for (let i = 0; i < totalSeconds; i += timestepInSeconds) {
      const time = JulianDate.addSeconds(start, i, new JulianDate());
      const jsDate = JulianDate.toDate(time);
      const res = getPosition(tle_l1, tle_l2, jsDate);
      const position = Cartesian3.fromDegrees(
        res.longitude,
        res.latitude,
        res.height
      );
      positionsOverTime.addSample(time, position);
    }
    console.log(positionsOverTime);
    setPosition(positionsOverTime);
  }, []);

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
      <Entity
        name="satelite jr"
        position={position}
        point={{ pixelSize: 10, color: Color.RED }}
      />
    </Viewer>
  );
}
