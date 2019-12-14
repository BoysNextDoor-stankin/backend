const storage = require('../modules/db-connect.js');

module.exports = async (req, res, next) => {
    console.log('Call create middleware');
    try {
        const params = req.body;
        // @todo ТОЛЬКО ДЛЯ ТОГО, ЧТОБЫ НЕ ЗАБИЛИ ВСЮ БАЗУ ;)
        return next({imageId: null});
        const response = await storage.one(req.sqlQueries.create, {params});
        next(response);
    } catch (error) {
        next(error);
    }
};
