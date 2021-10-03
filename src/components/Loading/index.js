import { Div, Iframe } from "./style";
const Loading = () => {
  return (
    <Div>
      <h1>Mapping Space Trash in Real Time</h1>

      <main>
        <Iframe src="loader.html" frameborder="0" allowfullscreen></Iframe>
      </main>
    </Div>
  );
};

export default Loading;
