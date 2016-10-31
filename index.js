const api = {};

Object.assign(api, require('./lib/comparison'));
Object.assign(api, require('./lib/ranges'));
Object.assign(api, require('./lib/functions'));

module.exports = api;
