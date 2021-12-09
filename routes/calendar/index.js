const routes = require('express').Router();

const allcalendar = require('./allcalendar');
const calendardetails = require('./calendardetails');
const updatecalendar = require('./updatecalendar');
const calendarrange = require('./calendarrange');
const calendarmaintain = require('./calendarmaintain');
 
routes.get('/allcalendar', allcalendar);
routes.get('/calendardetail/:date', calendardetails);
routes.put('/updatecalendar', updatecalendar);
routes.post('/calendarrange',calendarrange);
routes.post('/calendarmaintain',calendarmaintain);

module.exports = routes;