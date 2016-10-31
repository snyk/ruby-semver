const api = {};

Object.assign(api, require('./lib/comparison'));
Object.assign(api, require('./lib/ranges'));

module.exports = api;
