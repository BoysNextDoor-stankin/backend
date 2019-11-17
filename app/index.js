const Express = require('express');
const bodyParser = require('body-parser');
const appUtil = require('./modules/utilities.js');
const errors = require('./modules/errors.js');
const resources = require('./resources');


const apiRoot = '/api';

const app = new Express();


app.use(bodyParser.json({limit: '50mb'}), bodyParser.urlencoded({extended: true, limit: '50mb'}));


const staticRoot = `/static`;
app.use(staticRoot, Express.static('public'));


const responseTemplate = {
    success: true,
    code: 200,
    data: {},
};


app.use((req, res, next) => {
    console.log(`Call ${req.method} ${req.originalUrl}`);
    next();
});

const endpoints = Object.keys(resources);

endpoints.forEach(endpoint => {
    app.use(`${apiRoot}/`, resources[endpoint].routings);
});



app.use((responseData, req, res, next) => {
    try {
        let success = true;
        let data = responseData;
        let appResponse = {...responseTemplate};

        appResponse.data = (appUtil.isString(data)) ? {message: data} : data;

        if (appUtil.isError(data)) {
            success = false;
            if (!appUtil.has(data, 'appError')) {
                console.error('', responseData);
                data = new errors.Internal(data.message);
            }

            appResponse = {...responseTemplate, success, ...data.toResponse()};
        }

        console.info(`Response ${req.method} ${req.originalUrl} => ${appResponse.code} ${JSON.stringify(appResponse)}`);
        res.status(appResponse.code).json(appResponse);
    } catch (error) {
        const errInternal = new errors.Internal(error.message);
        const errResponse = {...responseTemplate, success: false, ...errInternal.toResponse()};
        res.status(errResponse.code).json(errResponse);
    }
});




module.exports = app;
