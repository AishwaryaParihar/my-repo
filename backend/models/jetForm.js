const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const JetformSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true },
    category: { type: String, required: true },
    address: { type: String, required: true },
    dob: { type: Date, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    gender: { type: String, required: true },
    guardianName: { type: String },
    photo: {
      data: String,
      contentType: String,
    },
    adhaarPhoto: {
      data: String,
      contentType: String,
    },
    degree: { type: String },
    college: { type: String },
    graduationYear: { type: String },
    masterGraduationYear: { type: String },
    masterUniversityAndDegree: { type: String },
    annualIncome: { type: String },
    accomodationRequirement: { type: String },
  },
  {
    timestamps: true,
  }
);

const JetForm = mongoose.model("JetForm", JetformSchema);

module.exports = JetForm;
