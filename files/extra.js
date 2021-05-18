const fs = require('fs');

const sounds = {}

const lines = fs.readFileSync('./files/extra.csv', 'utf-8')
    .split(/\r?\n/)
    .forEach(function (line) {
        if (line == '') {
            return;
        }

        const [filename, text] = line.split(';')
        sounds[filename] = text
    });

module.exports = sounds