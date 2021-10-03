import { Div } from "./style";
const Loading = ({ clickHandler, isLoading }) => {
  return (
    <Div>
      <h1>Mapping Space Trash in Real Time</h1>
      {isLoading ? (
        <p>Your content is Loading, Please Wait...</p>
      ) : (
        <button onClick={() => clickHandler()}>Cerrar</button>
      )}
    </Div>
  );
};

export default Loading;
