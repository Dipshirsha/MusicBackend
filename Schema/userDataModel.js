const mongoose = require("mongoose");

//Create Schema
const userDataSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        photo: {
            type: String,
          
        },
        playlist:{
            type:[String],
            required: true,
        },
        liked:{
            type:[String],
            required: true,
        },
        playhistory:{
            type:[String],
            required: true,
        },
        fireBaseId:{
            type:String,
            required: true,
           
        }

    },
    { timestamps: true }
);

//Create Model
const userData = mongoose.model("UserData", userDataSchema);

module.exports = userData;