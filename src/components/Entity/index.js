import { Color } from "cesium";
import { Entity } from "resium";

const EntityComponent = ({ name, position }) => {
  return (
    <Entity
      name={name}
      position={position}
      point={{ pixelSize: 10, color: Color.RED }}
    ></Entity>
  );
};

export default EntityComponent;
