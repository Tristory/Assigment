const mongoose = require("mongoose");


const PurchaseSchema = new mongoose.Schema({
    PurchaseID : {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    Productname : {
        type: String,
        required: true,
        trim: true,
    },
    Purchaseday : {
        type: Date,
        default : Date.now,
    },
});

const Purchase = mongoose.model("Purchase", PurchaseSchema,"Purchase");
module.exports = Purchase;