/* eslint-disable new-cap */

import express from 'express';
const router = module.exports = express.Router();
import City from '../models/city';

router.get('/new', (req, res) => {
  res.render('cities/new');
});

router.get('/:id', (req, res) => {
  res.render('cities/show');
});

router.post('/', (req, res) => {
  const c = new City(req.body);
  c.save(() => {
    res.send(c);
  });
});
