const routes = require('express').Router();

const alluseraccount = require('./alluseraccount');
const useraccountdetails = require('./useraccountdetails');
const adduseraccount = require('./adduseraccount');
const updateuseraccount = require('./updateuseraccount');
const deleteuseraccount = require('./deleteuseraccount');


routes.get('/alluseraccount', alluseraccount);
routes.get('/useraccountdetails/:id', useraccountdetails);
routes.post('/adduseraccount', adduseraccount);
routes.put('/updateuseraccount', updateuseraccount );
routes.delete('/deleteuseraccount', deleteuseraccount );

module.exports = routes;