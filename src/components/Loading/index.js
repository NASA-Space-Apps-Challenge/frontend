import { Div } from "./style";
const Loading = ({ clickHandler, isLoading }) => {
  return (
    <Div>
      <h1>Mapping Space Trash in Real Time</h1>
      {isLoading ? (
        <p>Your content is loading, please wait...</p>
      ) : (
        <button onClick={() => clickHandler()}>Close</button>
      )}
    </Div>
  );
};

export default Loading;
