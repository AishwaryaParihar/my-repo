const MPCJFormDetails = require('../models/mpcjOfflineMT');

const saveMPCJFormDetails = async (req, res) => {
  const { name, email, contact, purchasedProduct } = req.body;
  console.log(req.body)

  try {
    const newMPCJFormDetails = new MPCJFormDetails({
      name,
      email,
      contact,
      purchasedProduct,
    });

    await newMPCJFormDetails.save();
    res.status(201).send({ message: 'MPCJ form details saved successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error saving MPCJ form details', error });
  }
};

const findMPCJFormDetails = async (req, res) => {
  try {
    const mpcjFormDetails = await MPCJFormDetails.find();
    res.status(200).send(mpcjFormDetails);
  } catch (error) {
    res.status(400).send({ message: 'Error retrieving MPCJ form details', error });
  }
};

module.exports = { saveMPCJFormDetails, findMPCJFormDetails };
