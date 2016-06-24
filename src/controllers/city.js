/* eslint-disable new-cap */
/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */

import express from 'express';
const router = module.exports = express.Router();
import City from '../models/city';
import Country from '../models/country';

router.get('/new', (req, res) => {
  Country.find((err, countries) => {
    res.render('cities/new', { countries });
  });
});

router.get('/:id', (req, res) => {
  res.render('cities/show');
});

router.post('/', (req, res) => {
  const c = new City(req.body);
  c.save(() => {
    res.redirect(`cities/${c._id}`);
  });
});
