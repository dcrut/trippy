/* eslint-disable new-cap */
/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */

import express from 'express';
const router = module.exports = express.Router();
import City from '../models/city';
import Country from '../models/country';

router.get('/new', (req, res) => {
  Country.find((err, countries) => {
    res.render('cities/new', { countries });
  });
});

router.get('/getCities', (req, res) => {
  City.find((err, results) => {
    res.send(results);
  });
});

router.get('/:id', (req, res) => {
  City.findById(req.params.id)
  .populate('country')
  .exec(function (err, city) {
    res.render('cities/show', { city });
  });
});

router.post('/', (req, res) => {
  const c = new City(req.body);
  c.save(() => {
    Country.findById(c.country, (err, foundCountry) => {
      foundCountry.cities.push(c._id);
      foundCountry.save();
      res.redirect(`cities/${c._id}`);
    });
  });
});
