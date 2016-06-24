/* eslint-disable new-cap */
/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */

import express from 'express';
const router = module.exports = express.Router();
import Country from '../models/country';


router.get('/', (req, res) => {
  Country.find((err, countries) => {
    res.render('countries/index', { countries });
  });
});

router.get('/new', (req, res) => {
  res.render('countries/new');
});

router.get('/:id', (req, res) => {
  Country.findById(req.params.id)
  .populate('cities')
  .exec(function (err, country) {
    res.render('countries/show', { country });
  });
});

router.post('/', (req, res) => {
  const c = new Country(req.body);
  c.save(() => {
    res.redirect(`/countries/${c._id}`);
  });
});
