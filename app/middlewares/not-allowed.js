const errors = require('../../app/modules/errors.js');

module.exports = (req, res, next) => {
    console.log(`Call notAllowed middleware`);

    next(new errors.NotAllowed(`Метод ${req.method} не поддерживается для эндпоинта ${req.originalUrl}`));
};
