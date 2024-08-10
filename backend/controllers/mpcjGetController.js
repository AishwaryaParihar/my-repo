const MPCJFormdetails = require("../models/mpcjOfflineMT");


async function mpcjGetData(req, res) {
  try {

    const mpcjData = await MPCJFormdetails.find();
    res.json({
      message: "All MPCJ data",
      data: mpcjData,
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

module.exports = mpcjGetData;
