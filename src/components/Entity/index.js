import { Color } from "cesium";
import { Entity } from "resium";

const EntityComponent = ({ name, position, description }) => {
  return (
    <Entity
      name={name}
      description={description}
      position={position}
      point={{ pixelSize: 5, color: Color.PURPLE }}
    ></Entity>
  );
};

export default EntityComponent;
