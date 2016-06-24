import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: String,
  age: Number,
  gender: String,
  photo: String,
  money: Number,
  cities: Array,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Person', personSchema);
