const getPoints = async () => {
  let response = await fetch("https://api.milkywey.rocks/").then((response) =>
    response.json()
  );
  response = response.slice(0, 3);

  return response;
};

export default getPoints;
