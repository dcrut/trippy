/* eslint-disable new-cap */
/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */

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
  Country.findById(req.params.id, (err, country) => {
    console.log(country);
    res.render('countries/show');
  });
});

router.post('/', (req, res) => {
  const c = new Country(req.body);
  c.save(() => {
    res.redirect(`/countries/${c._id}`);
  });
});
