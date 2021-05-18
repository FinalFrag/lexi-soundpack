
const systemSounds  = require('./system');
const extraSounds  = require('./extra');

const sounds = Object.assign({}, systemSounds, extraSounds);

module.exports = sounds;