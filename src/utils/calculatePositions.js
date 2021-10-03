import getPosition from "./getPosition";
import { Cartesian3, JulianDate, SampledPositionProperty } from "cesium";

const calculatePositions = ({
  totalSeconds,
  timestepInSeconds,
  start,
  tl1,
  tl2,
}) => {
  try {
    const positionsOverTime = new SampledPositionProperty();
    for (let i = 0; i < totalSeconds; i += timestepInSeconds) {
      const time = JulianDate.addSeconds(start, i, new JulianDate());
      const jsDate = JulianDate.toDate(time);
      const res = getPosition(tl1, tl2, jsDate);
      const position = Cartesian3.fromDegrees(
        res.longitude,
        res.latitude,
        res.height
      );
      positionsOverTime.addSample(time, position);
    }
    return positionsOverTime;
  } catch (e) {
    // console.error(e);
  }
};

export default calculatePositions;
