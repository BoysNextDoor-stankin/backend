const middlewares = require('../../middlewares');

module.exports = (router, queries, endpoint, endpointName) => {
    router.use((req, res, next) => {
        req.endpoint = endpointName;
        req.sqlQueries = queries;
        next();
    });

    router.route(`/${endpoint}/`)
        .get(middlewares.getAll)
        .options(middlewares.cors)
        .post(
            middlewares.create,
        )
        .all(middlewares.notAllowed);

    return router;
};
