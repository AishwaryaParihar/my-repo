const mongoose = require('mongoose');

const RegistrationFormSchema = new mongoose.Schema({
  picture: {
    type: Buffer,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  placeOfBirth: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  fullAddress: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  pinCode: {
    type: Number,
    required: true
  },
  qualification: {
    type: String,
    required: true
  },
  collegeUniversity: {
    type: String,
    required: true
  },
  pursuingLLB: {
    type: String,
    enum: ['yes', 'no'],
    required: true
  },
  yearOfPassing: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  fatherName: {
    type: String,
    required: true
  },
  motherName: {
    type: String,
    required: true
  },
  permanentAddress: {
    type: String,
    required: true
  },
  permanentState: {
    type: String,
    required: true
  },
  permanentCity: {
    type: String,
    required: true
  },
  aadharCard: {
    type: Buffer,
    required: true
  },
  lastExamDetails: {
    prelims: {
      type: String,
      enum: ['yes', 'no'],
      required: true
    },
    mains: {
      type: String,
      enum: ['yes', 'no'],
      required: true
    },
    state: {
      type: String,
      required: true
    },
    score: {
      type: Number,
      required: true
    },
    year: {
      type: Number,
      required: true
    }
  },
  feesPaid: {
    onlineUPI: {
      type: String,
      enum: ['yes', 'no'],
      required: true
    },
    amountPaid: {
      type: Number,
      required: true
    }
  },
  oldStudentOfShubhamSir: {
    type: String,
    enum: ['yes', 'no'],
    required: true
  },
  institution: String,
},{ timestamps: true });

module.exports = mongoose.model('RegistrationForm', RegistrationFormSchema);
