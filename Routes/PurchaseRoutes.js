const express = require("express");
const PurchaseModel = require("../Models/Purchase");

const router = express.Router();


router.get("/", async (req, res) =>{
    res.render("Home")
});

router.get("/create", async (req, res) =>{
    res.render("Create")
});

router.post("/", async (req, res) => {
    const purchase = new PurchaseModel(req.body);

    try {
        console.log(req.body);
        await  purchase.save();
        res.send(purchase);
    } catch (error) {
        res.status(500).send(error);
    }
});

/*
var mongo = require("mongodb").MongoClient;

var assert = require("assert");

var url = "mongodb+srv://Tris:Tris@cluster0.ax4nu.mongodb.net/Homepage?retryWrites=true&w=majority";

var fs = require("fs");
*/

/*
router.post("/test", async (req, res) => {
    var data = {
        PurchaseID : "000",
        Productname : "Test Object",
        Purchaseday : "Lol",
    }

    const purchase = new PurchaseModel(data);

    try {
        console.log(data);
        await  purchase.save();
        res.send(purchase);
    } catch (error) {
        res.status(500).send(error);
    }
});

/*
router.post("/test", async (req, res) => {
    const purchase = new PurchaseModel({ PurchaseID : "000", Productname : "Test object", Purchaseday: Date.now });

    try {
        await  purchase.save();
        res.send(purchase);
    } catch (error) {
        res.status(500).send(error);
    }
});
*/
/*
router.get("/:postid", async (req, res) => {
    const purchase = await PurchaseModel.findById(req.params.postid);

    try {
        res.send(purchase);
    } catch (error) {
        res.status(500).send(error);
    }
});
*/
/*
router.get("/", async (req, res) => {
    const purchase = await PurchaseModel.find({});

    try {
        res.render("Home", { Home : purchase });
    } catch (error) {
        res.status(500).send(error);
    }
});



router.get("/view/:id", async (req, res) => {
    res.send("View " + req.params.id);
});

router.get("/edit/:id", async (req, res) => {
    res.send("Edit " + req.params.id);
});



router.post("/", async (req, res) => {
    const purchase = new PurchaseModel(req.body);

    try {
        console.log(req.body);
        await  purchase.save();
        res.send(purchase);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.patch("/:id", async (req, res) => {

    try {
        console.log(req.params, req.body);
        const purchase = await  PurchaseModel.findByIdAndUpdate(req.params.id, req.body);
        await  PurchaseModel.save();
        res.send(purchase);
    } catch (error) {
        res.status(500).send(error);
    }
});
*/

module.exports = router;