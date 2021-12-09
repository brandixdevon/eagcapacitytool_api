const routes = require('express').Router();

const allprojects = require('./allprojects');
const projectdetails = require('./projectdetails');
const addprojects = require('./addprojects');
const updateprojects = require('./updateproject');
const deleteprojects = require('./deleteproject');
const allpwulist = require('./allpwulist');

routes.get('/allprojects', allprojects);
routes.get('/projectdetails/:id', projectdetails);
routes.post('/addprojects', addprojects);
routes.put('/updateprojects', updateprojects);
routes.put('/deleteprojects', deleteprojects);
routes.get('/allpwulist/:id', allpwulist);


module.exports = routes;