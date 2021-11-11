
var path = require("path");



const express = require('express');
const app = express();



const Handlebars = require('handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

hbs = require( 'express-handlebars' );

app.engine( 'hbs', hbs( { 
    extname: 'hbs', 
    defaultLayout: 'main', 
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    hbs: allowInsecurePrototypeAccess(Handlebars),
  } ) );
app.set('view engine', 'hbs');

app.set("views", path.join(__dirname, "views")); 



app.use(express.static('public'))

app.use(express.json());
app.use(express.urlencoded());

bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));



const hostname = "localhost";



const url =  "mongodb+srv://Tris:Tris@cluster0.ax4nu.mongodb.net/Homepage?retryWrites=true&w=majority"

const mongoose = require("mongoose");
mongoose.connect(
    url, 
    {   useNewUrlParser: true , useUnifiedTopology: true }
);



var solan = 0;


app.use(
    (req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type","text/html");
        console.log("--- ", Date.now(), " \t request !!!", solan++ , req.url);
        next();
    }
);

app.use(
    (err, req, res, next) => {
        res.statusCode = 500;
        console.log("--- ERR", Date.now(), " \t request !!!", solan++ , req.url, err);
        res.end("Broking !!!");
    }
);



const homeRouter = require("./Routes/PurchaseRoutes");
app.use("/home", homeRouter);

/*const orderRouter = require("./Routes/OrderRoutes");
app.use("/order", orderRouter);

const productRouter = require("./Routes/ProductRoutes");
app.use("/product", productRouter);

const reportRouter = require("./Routes/ReportRoutes");
app.use("/report", reportRouter);

const adminRouter = require("./Routes/AdminRoutes");
app.use("/admin", adminRouter);
*/

const aboutRouter = require("./Routes/InfoRoutes");
app.use("/about", aboutRouter);
/*
const loginRouter = require("./Routes/LoginRoutes");
app.use("/login", loginRouter);

const logoutRouter = require("./Routes/LogoutRoutes");
app.use("/logout", logoutRouter);

const signinRouter = require("./Routes/SigninRoutes");
app.use("/signin", signinRouter);

const contactRouter = require("./Routes/ContactRoutes");
app.use("/contact", contactRouter);

const accountRouter = require("./Routes/AccountRoutes");
app.use("/account", accountRouter);
*/


const port = process.env.PORT || 3000;

app.listen( port, () => {
    console.log("Start SERVER - LISTEN ", port);
});