const express = require('express');
const queries = require('./queries.js');
const imagesRoutings = require('./images-routings.js');

const endpoint = 'images';
const endpointName = 'images';

const router = express.Router();
const endpointRouter = imagesRoutings(router, queries, endpoint, endpointName);

module.exports = endpointRouter;
