const tpmFormDetails = require("../models/tpm");


async function tpmGetData(req,res){
    try {

        const tpmData = await tpmFormDetails.find()
        res.json({
            message: "All TPM data",
            data: tpmData,
            success: true,
            error: false
        });
        
    } catch (error) {
        res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

module.exports = tpmGetData;