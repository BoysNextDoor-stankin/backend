const storage = require('../modules/db-connect.js');

module.exports = async (req, res, next) => {
    console.log('Call getAll middleware');
    try {
        const response = await storage.any(req.sqlQueries.getAll);
        next(response);
    } catch (error) {
        next(error);
    }
};
