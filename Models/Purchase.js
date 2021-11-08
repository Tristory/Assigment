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
        default : "2021-10-20",
    },
});

const Purchase = mongoose.model("Purchase", PurchaseSchema,"Order");
module.exports = Purchase;