const errors = require('../modules/errors.js');

module.exports = (req, res, next, id) => {
    console.log(`Validate query property {id: ${id}} for endpoint ${req.endpoint}`);
    const currId = +id;

    if (Number.isNaN(currId) || !Number.isInteger(currId)) {
        next(new errors.BadRequest(`Некорректный ID для эндпоинта ${req.endpoint}: ${currId}`));
        return;
    }

    req.params.id = currId;
    next();
};
