const PyPapersDetails = require("../models/pyPaper");

// Ensure this is an Express route handler function
async function allPyPapers(req, res) {
  try {

    const allpapers = await PyPapersDetails.find();
    res.json({
      message: "All users",
      data: allpapers,
      success: true,
      error: false
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false
    });
  }
}

module.exports = allPyPapers;
