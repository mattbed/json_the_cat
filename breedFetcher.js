const request = require('request');
const input = process.argv.slice(2);
const url = "https://api.thecatapi.comblap/v1/breeds/search?q=" + input[0];

request(url, (error, response, body) => {
  if (error) {
    console.log('Error! ', error);
    return;
  }
  const data = JSON.parse(body);
  if (data.length !== 0) {
    console.log(data[0].description);
    return;
  }
  console.log("There was no entry for this breed.");
});