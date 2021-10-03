import { useState, useEffect } from "react";
import Entity from "../Entity";
import calculatePositions from "../../utils/calculatePositions";
import getPoints from "../../utils/getPoints";
import Loading from "../Loading";

async function getElements(props) {
  let rawData = await getPoints();

  let newData = await rawData.map(([id, name, tl1, tl2, description]) => {
    const res = calculatePositions({ tl1, tl2, ...props });
    return {
      id,
      description,
      name,
      position: res,
    };
  });

  return newData;
}

const ListOfEntities = (props) => {
  const [positions, setPositions] = useState([]);
  const [closeloading, setCloseLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // const [limit, setLimit] = useState(0);
  let clickHandler = () => {
    setCloseLoading(true);
  };

  useEffect(() => {
    (async () => {
      const newData = await getElements(props);
      setPositions(newData);
      setIsLoading(false);
    })();
  }, [props]);

  if (!closeloading) {
    return <Loading clickHandler={clickHandler} isLoading={isLoading} />;
  }

  return positions.map((position) => (
    <Entity {...position} key={position.id} />
  ));
};

export default ListOfEntities;
