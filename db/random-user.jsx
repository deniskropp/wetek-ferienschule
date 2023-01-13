const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://random-user-by-api-ninjas.p.rapidapi.com/v1/randomuser',
  headers: {
    'X-RapidAPI-Key': '185666417cmshcb6cb46fcb0fe21p1f568djsnf53e92f4ca97',
    'X-RapidAPI-Host': 'random-user-by-api-ninjas.p.rapidapi.com'
  }
};

async function load() {
	const response = await axios.request(options)
	const [Vorname, Name] = response.data.name.split(' ')

	console.log(`(Name,Vorname,Email,Klassen_id) VALUES ('${Name}','${Vorname}','${response.data.email}',1)`);
}

load()
