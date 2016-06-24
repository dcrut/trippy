/* eslint-disable new-cap */
/* eslint-disable no-underscore-dangle */

import express from 'express';
const router = module.exports = express.Router();
import Country from '../models/country';


router.get('/', (req, res) => {
  res.render('countries/index');
});

router.get('/new', (req, res) => {
  res.render('countries/new');
});

router.get('/:id', (req, res) => {
  res.render('countries/show');
});

router.post('/', (req, res) => {
  const c = new Country(req.body);
  c.save(() => {
    res.redirect(`/countries/${c._id}`);
  });
});
