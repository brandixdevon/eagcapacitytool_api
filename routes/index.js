const routes = require('express').Router();
const express = require('express');

const employee = require('./employee');
const projects = require('./projects');
const capacity= require('./capacity');
const calendar = require('./calendar');
const task = require('./task');
const useraccount =require('./useraccount');
const login =require('./login');
const dataforchart =require('./dataforchart');


routes.use('/employee',employee);
routes.use('/projects',projects);
routes.use('/capacity',capacity);
routes.use('/calendar',calendar);
routes.use('/task',task);
routes.use('/useraccount',useraccount);
routes.use('/login',login);
routes.use('/dataforchart',dataforchart);


routes.use(express.json());

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;