const EducationalDetails = require('../models/educational');

const saveEducationalDetails = async (req, res) => {
  const {
    degree,
    college,
    graduationYear,
    masterGraduationYear,
    masterUniversityDegree,
  } = req.body;

  try {
    const newEducationalDetails = new EducationalDetails({
      degree,
      college,
      graduationYear,
      masterGraduationYear,
      masterUniversityDegree,
    });

    await newEducationalDetails.save();
    res.status(201).send({ message: 'Educational details saved successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error saving educational details', error });
  }
};

const findEducationalDetails = async (req, res) => {
  try {
    const educationalDetails = await EducationalDetails.find();
    res.status(200).send(educationalDetails);
  } catch (error) {
    res.status(400).send({ message: 'Error retrieving educational details', error });
  }
};

module.exports = { saveEducationalDetails, findEducationalDetails };
