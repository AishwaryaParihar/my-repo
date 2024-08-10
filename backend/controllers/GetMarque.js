const marqueeModel = require("../models/marquee");

async function marqueeGetData(req, res) {
 
  try {
    const marqueeData = await marqueeModel.find();
    res.json({
      message: "Marquee data",
      data: marqueeData,
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}


module.exports = marqueeGetData;