import mongoose from "mongoose";

const bestSchema = new mongoose.Schema({
  coin: {
    type: String,
    required: true,
    maxlength: 10,
  },

  buy: {
    type: Number,
    required: true,
    maxlength: 10,
  },

  sell: {
    type: Number,
    required: true,
    maxlength: 10,
  },
});

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 10,
  },

  buy: {
    type: Number,
    required: true,
    maxlength: 10,
  },

  sell: {
    type: Number,
    required: true,
    maxlength: 10,
  },
});

const generalSchema = new mongoose.Schema({
  coin: {
    type: String,
    required: true,
    maxlength: 10,
  },

  company: [companySchema],
});

const apiSchema = new mongoose.Schema({
  best: [bestSchema],

  general: [generalSchema],
});

export default mongoose.model("api", apiSchema);
