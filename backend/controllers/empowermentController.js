const EmpowermentFormDetails = require('../models/empowermentFormDetails');

const saveEmpowermentFormDetails = async (req, res) => {
  const {
    picture,
    name,
    placeOfBirth,
    dateOfBirth,
    fullAddress,
    state,
    pinCode,
    qualification,
    collegeUniversity,
    pursuingLLB,
    yearOfPassing,
    email,
    fatherName,
    motherName,
    permanentAddress,
    permanentState,
    permanentCity,
    aadharCard,
    feesPaid,
    oldStudentOfShubhamSir,
    institution
  } = req.body;

  try {
    const newEmpowermentFormDetails = new EmpowermentFormDetails({
      picture,
      name,
      placeOfBirth,
      dateOfBirth,
      fullAddress,
      state,
      pinCode,
      qualification,
      collegeUniversity,
      pursuingLLB,
      yearOfPassing,
      email,
      fatherName,
      motherName,
      permanentAddress,
      permanentState,
      permanentCity,
      aadharCard,
      feesPaid,
      oldStudentOfShubhamSir,
      institution
    });

    await newEmpowermentFormDetails.save();
    res.status(201).send({ message: 'Empowerment form details saved successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error saving empowerment form details', error });
  }
};

const findEmpowermentFormDetails = async (req, res) => {
  try {
    const empowermentFormDetails = await EmpowermentFormDetails.find();
    res.status(200).send(empowermentFormDetails);
  } catch (error) {
    res.status(400).send({ message: 'Error retrieving empowerment form details', error });
  }
};

module.exports = { saveEmpowermentFormDetails, findEmpowermentFormDetails };
