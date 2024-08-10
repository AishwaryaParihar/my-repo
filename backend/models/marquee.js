const { default: mongoose } = require("mongoose");

const marqueeSchema= new mongoose.Schema(
    {
       marquee:{
        type:String
       }
    },
);

const marqueeModel= mongoose.model("marqueeModel",marqueeSchema)
module.exports=marqueeModel
