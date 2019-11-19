const notAllowed = require('./not-allowed.js');
const create = require('./create.js');
const getAll = require('./get-all.js');
const getOne = require('./get-one.js');
const cors = require('./cors.js');
const idValidation = require('./id-validation.js');
const update = require('./update.js');

module.exports = {
    create,
    notAllowed,
    getAll,
    cors,
    idValidation,
    getOne,
    update,
};
