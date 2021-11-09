const express = require("express");
const PurchaseModel = require("../Models/Purchase");

var fs = require("fs");

const router = express.Router();

router.get("/", async (req, res) =>{

    res.render("Home")
});

router.get("/Banhgau", async (req, res) => {

    var dbo = db.db("Homepage");

    var data = { PurchaseID: "001", Productname: "Banh gau", Purchaseday: "11/10/2021" };

    dbo.collection("Purchase").insertOne(data, 
        (err, result) => {
            if (err) {
                console.log("\n ERR insert: ", err);
                process.exit();
            }
            console.log("\n Result - record added", result);

            db.close();
        }
    )
});

router.get("/Dogfood", async (req, res) => {

    var dbo = db.db("Homepage");

    var data = { PurchaseID: "001", Productname: "Dog food", Purchaseday: "11/10/2021" };

    dbo.collection("Purchase").insertOne(data, 
        (err, result) => {
            if (err) {
                console.log("\n ERR insert: ", err);
                process.exit();
            }
            console.log("\n Result - record added", result);

            db.close();
        }
    )
});

router.get("/PS5", async (req, res) => {

    var dbo = db.db("Homepage");

    var data = { PurchaseID: "001", Productname: "PS5C", Purchaseday: "11/10/2021" };

    dbo.collection("Purchase").insertOne(data, 
        (err, result) => {
            if (err) {
                console.log("\n ERR insert: ", err);
                process.exit();
            }
            console.log("\n Result - record added", result);

            db.close();
        }
    )
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