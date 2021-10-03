import { useState, useEffect } from "react";
import Entity from "../Entity";
import calculatePositions from "../../utils/calculatePositions";
import getPoints from "../../utils/getPoints";

const ListOfEntities = (props) => {
  const [positions, setPositions] = useState([]);
  // const [limit, setLimit] = useState(0);

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
  }, [positions, props]);

  return positions.map((position) => (
    <Entity {...position} key={position.name} />
  ));
};

export default ListOfEntities;
