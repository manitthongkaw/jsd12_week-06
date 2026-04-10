function getJoke(lat, lon) {
  const url = `https://v2.jokeapi.dev/joke/Any`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(`Found ${data.length} get joke`);
      console.log(data);
    })
    .catch((error) => {
      console.error("Something went wrong!", error);
    });
}

getJoke();
