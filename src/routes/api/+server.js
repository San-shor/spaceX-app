export const getLandingPadData = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/landpads');
  let landingPads = [];
  landingPads = await response.json();

  return landingPads;
};
