/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/landpads');
    const landsPadData = await response.json();

    return { landsPadData };
  } catch (error) {
    console.error(error);
  }
}
