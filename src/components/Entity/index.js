import { Color } from "cesium";
import { Entity } from "resium";

const EntityComponent = ({ name, position }) => {
  return (
    <Entity
      name={name}
      position={position}
      point={{ pixelSize: 5, color: Color.PURPLE }}
    ></Entity>
  );
};

export default EntityComponent;
