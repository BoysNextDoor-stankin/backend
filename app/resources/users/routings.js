const express = require('express');
const queries = require('./queries.js');
const usersRoutings = require('./users-routings.js');

const endpoint = 'users';
const endpointName = 'users';

const router = new express.Router();
const endpointRouter = usersRoutings(router, queries, endpoint, endpointName);

module.exports = endpointRouter;
