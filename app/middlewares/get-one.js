const storage = require('../modules/db-connect.js');

module.exports = async (req, res, next) => {
    console.log('Call getOne middleware');
    try {
        const params = {
            id: req.params.id,
        };
        const response = await storage.one(req.sqlQueries.getOne, {params});
        next(response);
    } catch (error) {
        next(error);
    }
};
