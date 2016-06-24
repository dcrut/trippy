/* eslint-disable new-cap */
/* eslint-disable no-underscore-dangle */
import Person from '../models/person';
import express from 'express';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  res.render('person/person');
});

router.get('/:id', (req, res) => {
  Person.findById(req.params.id, (err, found) => {
    res.render('person/personView', { person: found });
  });
});

router.post('/', (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const gender = req.body.gender;
  const photo = req.body.photo;
  const money = req.body.money * 1;

  const newPerson = new Person({ name, age, gender, photo, money });
  newPerson.save(() => {
    res.redirect(`person/${newPerson._id}`);
  });
});
