const mongoose = require("mongoose");


const InfoSchema = new mongoose.Schema({
    Infoname : {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },

    Infotext : {
        type: String,
        required: true,
        trim: true,
    },

    imglink : {
        type: String,
        required: true,
        trim: true,
    },

});

const Info = mongoose.model("Info", InfoSchema, "Info");
module.exports = Info;