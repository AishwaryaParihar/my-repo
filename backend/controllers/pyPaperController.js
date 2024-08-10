 // controllers/pyPaperController.js
const pyPapersDetails = require("../models/pyPaper");

const createPyPapersDetail = async (req, res) => {
  const { number, email, name } = req.body;

  console.log(req.body);

  if (!name || !email || !number) {
    return res
      .status(400)
      .json({ error: "name, email, and number are required fields." });
  }

  // Proceed with saving details if validation passes
  try {
    const pyPapersDetails2 = new pyPapersDetails({
      number,
      email,
      name,
    });
    await pyPapersDetails2.save();
    res.status(201).json(pyPapersDetails2);
  } catch (error) {
    console.error("Error saving pyPaper details:", error);
    res.status(500).json({ error: "Error saving pyPaper details" });
  }
};
module.exports = createPyPapersDetail;
