const routes = require('express').Router();

const addtask = require('./addtask');
const addtaskinrange = require('./addtaskinrange');
const alltask = require('./alltask');
const taskdetails = require('./taskdetails');
const updatetask = require('./updatetask');
const deletetask = require('./deletetask');
const alltaskproject = require('./alltaskproject');


routes.post('/addtask', addtask);
routes.post('/addtaskinrange', addtaskinrange);
routes.get('/alltask', alltask);
routes.get('/taskdetails/:id', taskdetails);
routes.put('/updatetask', updatetask);
routes.post('/deletetask', deletetask);
routes.get('/alltaskproject/:id', alltaskproject);

module.exports = routes;


