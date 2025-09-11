/*jslint node: true */
'use strict';

const routes = require('express').Router();

const read = require('./read');


routes.get('/read', read);

module.exports = routes;