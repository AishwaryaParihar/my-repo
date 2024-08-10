const GuardianDetails = require('../models/guardianDetails');

const saveGuardianDetails = async (req, res) => {
  const { guardianName, guardianProffession } = req.body;

  try {
    const newGuardianDetails = new GuardianDetails({
      guardianName,
      guardianProffession,
    });

    await newGuardianDetails.save();
    res.status(201).send({ message: 'Guardian details saved successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error saving guardian details', error });
  }
};

const findGuardianDetails = async (req, res) => {
  try {
    const guardianDetails = await GuardianDetails.find();
    res.status(200).send(guardianDetails);
  } catch (error) {
    res.status(400).send({ message: 'Error retrieving guardian details', error });
  }
};

module.exports = { saveGuardianDetails, findGuardianDetails };
