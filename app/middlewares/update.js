const storage = require('../modules/db-connect.js');

module.exports = async (req, res, next) => {
    console.log('Call update middleware');
    try {
        const params = req.body;
        params.id = req.params.id;
        const response = await storage.one(req.sqlQueries.update, {params});
        next(response);
    } catch (error) {
        next(error);
    }
};
