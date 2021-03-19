const franc = require('franc');
const langs = require('langs');

const langCode = franc('Alle menslike wesens word vry')
console.log(langs.where("3", langCode).name);