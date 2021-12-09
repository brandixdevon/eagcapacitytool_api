const routes = require('express').Router();

const allemployee = require('./allemployee');
const employeedetails = require('./employeedetails');
const addemployee = require('./addemployee');
const updateemployee = require('./updateemployee');
const deleteemployee = require('./deleteemployee');
const allewplist = require('./allewplist');
const allactiveemployees = require('./allactiveemployees');


routes.get('/allemployee', allemployee);
routes.get('/employeedatails/:url_empid', employeedetails);
routes.post('/addemployee', addemployee);
routes.put('/updateemployee', updateemployee);
routes.put('/deleteemployee', deleteemployee);
routes.get('/allewplist/:id', allewplist);
routes.get('/allactiveemployees',allactiveemployees);


module.exports = routes;