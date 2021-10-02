import React, { useState, useEffect } from "react";
import { Cartesian3 } from "cesium";
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

let tle_l1 =
  "1 00900U 64063C   21275.38340667  .00000269  00000-0  27775-3 0  9990";
let tle_l2 =
  "2 00900  90.1693  36.2849 0028983  80.6350 341.5474 13.73592980835239";

export default function App() {
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      var satrec = satellite.twoline2satrec(tle_l1, tle_l2);
      var positionAndVelocity = satellite.propagate(satrec, new Date());
      var positionEci = positionAndVelocity.position;
      // var velocityEci = positionAndVelocity.velocity;

      var gmst = satellite.gstime(new Date());
      var positionGd = satellite.eciToGeodetic(positionEci, gmst);
      var longitudeRad = positionGd.longitude,
        latitudeRad = positionGd.latitude,
        heightRad = positionGd.height;

      setLatitude(satellite.degreesLong(longitudeRad));
      setLongitude(satellite.degreesLat(latitudeRad));
      setHeight(heightRad);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Viewer full>
      {longitude ? (
        <Entity
          name="satelite jr"
          position={Cartesian3.fromDegrees(longitude, latitude, height)}
          point={{ pixelSize: 10 }}
        />
      ) : (
        <div></div>
      )}
    </Viewer>
  );
}
