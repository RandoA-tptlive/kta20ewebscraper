const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://xkcd.com/').then((response) => {
    console.log(response);
});
