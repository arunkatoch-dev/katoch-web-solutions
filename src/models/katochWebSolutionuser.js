const express = require("express");
const validator = require("validator");
const mongoose = require("mongoose");

const kwsUserSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 25,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  phone: {
    type: Number,
    minlength: 10,
    maxlength: 10,
  },
  msg: {
    type: String,
    required: true,
    maxlength: 500,
  },
});

const Kwsuser = new mongoose.model(
  "Kwsuser",
  kwsUserSchema
);

module.exports = Kwsuser;
