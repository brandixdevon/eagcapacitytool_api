const routes = require('express').Router();
const express = require('express');

routes.use(express.json());

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Capacity Api!' });
});

module.exports = routes;