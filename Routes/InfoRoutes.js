
const express = require("express");
const InfoModel = require("../Models/Info");

const router = express.Router();


router.get("/", async (req, res) =>{
    product = {Infoname: "Lol" , Infotext: "LOLOLOLO", imglink: ""};

    res.render("About", {About : product})
});

/*
router.get("/", async (req, res) => {
    const Info = await InfoModel.find({});

    try {
        res.render("About", { About : Info , layout: 'main'});
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
    const info = new InfoModel(req.body);

    try {
        console.log(req.body);
        await  info.save();
        res.send(info);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.patch("/:id", async (req, res) => {

    try {
        console.log(req.params, req.body);
        const product = await  productModel.findByIdAndUpdate(req.params.id, req.body);
        await  productModel.save();
        res.send(product);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete("/:id", async (req, res) => {

    try {
        console.log(req.params);
        const Info = await  InfoModel.findByIdAndDelete(req.params.id);
        if (!Info) res.status(404).send("NO item !");
        res.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }
});
*/
module.exports = router;