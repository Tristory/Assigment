const express = require("express");
const PurchaseModel = require("../Models/Info");

var fs = require("fs");

const router = express.Router();

router.get("/", async (req, res) =>{

    res.render("Home")
});
/*
router.get("/", async (req, res) => {
    const purchase = await PurchaseModel.find({});

    try {
        res.render("Home", { Home : purchase });
    } catch (error) {
        res.status(500).send(error);
    }
});




router.get("/", 
    (req, res) => {

        res.writeHead(200);
        var data = fs.readFileSync("./views/home.html");
        res.end(data.toString());
});


router.get("/create", async (req, res) => {
    res.render("purchase-create");
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