/* eslint-disable func-names */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: String,
  photos: { type: String, default: 'https://areyouhavingabubble.files.wordpress.com/2015/04/desert-1.jpg' },
  country: { type: mongoose.Schema.ObjectId, ref: 'Country', required: true },
  cost: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model('City', citySchema);
// Status API Training Shop Blog About
