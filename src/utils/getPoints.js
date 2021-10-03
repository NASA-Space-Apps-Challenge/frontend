const getPoints = async (limit = 0) => {
  let response = await fetch("https://api.milkywey.rocks/").then((response) =>
    response.json()
  );
  response = response.slice(limit, limit + 200);

  return response;
};

export default getPoints;
