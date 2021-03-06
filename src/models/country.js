/* eslint-disable func-names */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// import City from 'city';

const countrySchema = new Schema({
  name: String,
  photos: { type: String, default: 'http://static2.techinsider.io/image/56faa25b52bcd063018b95df-1200/earth-asteroid-meteorite-collision-collides-shutterstock.jpg' },
  cities: [{ type: mongoose.Schema.ObjectId, ref: 'City' }],
  balance: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Country', countrySchema);
