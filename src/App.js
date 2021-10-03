import React, { useState, useEffect } from "react";
import { Cartesian3, Color } from "cesium";
import { Viewer, Entity } from "resium";
import * as satellite from "satellite.js";

const getPoints = async () => {
  let data = await fetch("https://celestrak.com/NORAD/elements/active.txt", {
    mode: "no-cors",
  }).then((response) => response.text());

  data
    .split(/\r?\n/)
    .reduce(
      (r, e, i) => (i % 3 ? r[r.length - 1].push(e) : r.push([e])) && r,
      []
    )
    .map((x) => {
      x[0] = x[0].trim();
      return x;
    });
};

const getPosition = (tle_l1, tle_l2) => {
  const satrec = satellite.twoline2satrec(tle_l1, tle_l2);
  const positionAndVelocity = satellite.propagate(satrec, new Date());
  const positionEci = positionAndVelocity.position;
  // var velocityEci = positionAndVelocity.velocity;
  // var observerGd = {
  //   longitude: satellite.degreesToRadians(-122.0308),
  //   latitude: satellite.degreesToRadians(36.9613422),
  //   height: 0.37,
  // };
  const gmst = satellite.gstime(new Date());

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
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const res = getPosition(tle_l1, tle_l2);
      console.log(res);
      setLongitude(res.longitude);
      setLatitude(res.latitude);
      setHeight(res.height);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <Viewer full>
      {longitude ? (
        <Entity
          name="satelite jr"
          position={Cartesian3.fromDegrees(longitude, latitude, height)}
          point={{ pixelSize: 10, color: Color.Red }}
        />
      ) : (
        <div></div>
      )}
    </Viewer>
  );
}
