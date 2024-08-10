const TpmFormDetails = require('../models/tpm');

const saveTpmFormDetails = async (req, res) => {
  const { name, email, contact, purchasedProduct } = req.body;
  console.log('Received request to save TPM form details:', req.body);

  try {
    const newTpmFormDetails = new TpmFormDetails({
      name,
      email,
      contact,
      purchasedProduct,
    });

    await newTpmFormDetails.save();
    res.status(201).send({ message: 'TPM form details saved successfully' });
  } catch (error) {
    console.error('Error saving TPM form details:', error);
    res.status(400).send({ message: 'Error saving TPM form details', error });
  }
};

const findTpmFormDetails = async (req, res) => {
  console.log('Received request to find TPM form details');

  try {
    const tpmFormDetails = await TpmFormDetails.find();
    res.status(200).send(tpmFormDetails);
  } catch (error) {
    console.error('Error retrieving TPM form details:', error);
    res.status(400).send({ message: 'Error retrieving TPM form details', error });
  }
};

module.exports = { saveTpmFormDetails, findTpmFormDetails };
