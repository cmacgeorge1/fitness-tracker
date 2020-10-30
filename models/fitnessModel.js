const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
    exercises: [{
  exerciseName: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  exerciseSets: {
    type: Number,
    required: true
  },

  exerciseReps: {
    type: Number
},

  exerciseType: {
    type: String,
  },

  exerciseWeight: Number,
  
  exerciseDuration: Number
}],
    date: {
    type: Date,
    default: Date.now
  }
});

const Fitness = mongoose.model("Fitness", fitnessSchema);

module.exports = Fitness;