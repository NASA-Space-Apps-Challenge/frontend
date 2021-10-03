import * as satellite from "satellite.js";

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

export default getPosition;
