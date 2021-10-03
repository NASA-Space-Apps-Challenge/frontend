const getPoints = async (limit = 0) => {
  let response = await fetch("data/data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((response) => response.json());

  return response;
};

export default getPoints;
