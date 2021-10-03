import { Button, Div, Iframe } from "./style";
const Loading = ({ clickHandler, isLoading }) => {
  return (
    <Div>
      <h1>Mapping Space Trash in Real Time</h1>

      <Iframe
        src="https://www.youtube.com/embed/Ctvzf_p0qUA?start=5&autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></Iframe>
      <main>
        {isLoading ? (
          <p>Your content is loading, please wait...</p>
        ) : (
          <section>
            <p>Your content has loaded, you can close this now</p>
            <Button onClick={() => clickHandler()}>Close</Button>
          </section>
        )}
      </main>
    </Div>
  );
};

export default Loading;
