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
    getPoints().then((points) => {
      let ulti = [];
      points.forEach(([name, tl1, tl2]) => {
        const res = calculatePositions({ name, tl1, tl2, ...props });
        console.log(res);
        ulti.push(res);
      });
      setPositions(ulti);
    });
  }, [props]);

  return (
    <Suspense fallback={"asdf"}>
      {positions.map((position) => (
        <Entity position={position} />
      ))}
    </Suspense>
  );
};

export default ListOfEntities;
