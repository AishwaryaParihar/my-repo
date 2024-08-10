const marqueeModel = require("../models/marquee");

async function saveMarquee(req, res) {
    const { marquee } = req.body;
    try {
        const addMarquee = new marqueeModel(
            {
                marquee,
            }
        )
        console.log("marweeeee data",addMarquee)

        const marqueeSaved=await addMarquee.save();
        res.status(200).json({
            message:"marquee successfully added",
            data:marqueeSaved,
            error:false,
            success:true
        })
    } catch (error) {
        res.status(500).json({
            error: "error saving marquee",
            success: false
        })
    }
}
module.exports=saveMarquee