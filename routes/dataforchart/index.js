const routes = require('express').Router();

const userwiseheatmap = require('./userwiseheatmap');

routes.post('/userwiseheatmap', userwiseheatmap);

module.exports = routes;