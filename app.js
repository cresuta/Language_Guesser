const franc = require('franc');
const langs = require('langs');
const colors = require('colors');
const input = process.argv[2];

try {
    const langCode = franc(input, {minLength: 3})
    const languageName = langs.where("3",langCode)
    console.log(`Our guess: ${languageName.name.underline.green}`)
} catch (e) {
    console.log(e)
    console.log('Too short of a string. Try longer than 3 characters')
}