import { useState, useEffect, Suspense } from "react";
import Entity from "../Entity";
import calculatePositions from "../../utils/calculatePositions";
import getPoints from "../../utils/getPoints";

const ListOfEntities = (props) => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    (async () => {
      let rawData = await getPoints();

      let newData = rawData.map(([name, tl1, tl2]) => {
        const res = calculatePositions({ tl1, tl2, ...props });
        return {
          name,
          position: res,
        };
      });

      setPositions(newData);
    })();
  }, [props]);

  return (
    <Suspense fallback={"asdf"}>
      {positions.map((position) => (
        <Entity {...position} key={position.name} />
      ))}
    </Suspense>
  );
};

export default ListOfEntities;
