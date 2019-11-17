const notAllowed = require('./not-allowed.js');
const create = require('./create.js');
const getAll = require('./get-all.js');
const cors = require('./cors.js');

module.exports = {
    create,
    notAllowed,
    getAll,
    cors,
};
