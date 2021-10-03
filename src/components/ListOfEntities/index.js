import { useState, useEffect, Suspense } from "react";
import Entity from "../Entity";
import calculatePositions from "../../utils/calculatePositions";

const getPoints = async () => {
  let response = await fetch("https://api.milkywey.rocks/").then((response) =>
    response.json()
  );
  response = response.slice(0, 3);

  return response;
};

const ListOfEntities = (props) => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    (async () => {
      let points = await getPoints();

      let newData = points.map(([name, tl1, tl2]) => {
        const res = calculatePositions({ tl1, tl2, ...props });
        return {
          name,
          position: res,
        };
      });

      console.log(newData);
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
