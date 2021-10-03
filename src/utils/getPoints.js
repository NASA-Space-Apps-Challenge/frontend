const getPoints = async (limit = 0) => {
  let response = await fetch("https://api.milkywey.rocks/").then((response) =>
    response.json()
  );

  return response;
};

export default getPoints;
