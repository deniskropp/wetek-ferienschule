const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://random-user.p.rapidapi.com/getuser',
  headers: {
    'X-RapidAPI-Key': 'acee344339mshfa967de0b6a29d8p148e75jsn9a5790c07991',
    'X-RapidAPI-Host': 'random-user.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(`(Name,Vorname,Email,Klasse) VALUES ('${response.data.results[0].name.last}','${response.data.results[0].name.first}','${response.data.results[0].email}',0)`);
}).catch(function (error) {
	console.error(error);
});
