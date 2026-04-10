const api = require("./api.js");

const url = "https://api.api-ninjas.com/v1/animals?name=cheetah";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": api,
    "Content-Type": "application/json",
  },
};

fetch(url, options)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    //return data;
  })
  .catch((error) => {
    console.error("Something went wrong!", error);
  });
