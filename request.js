const axios = require("axios");
// * when axios has get the response from facebook.
axios
  .get("https://www.facebook.com")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .then(() => {
    console.log("Done");
  });