const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); //Brings in express mongoose and body parser, server, easier for db and allows reading of body from requests
const items = require("./routes/api/items");
const app = express(); //assings express to the variable called app so we can use it like below
const path = require("path");

app.use(bodyParser.json()); // tells express to make use of body parser so we can use it in our router

const db = require("./config/keys").mongoURI; // brings in mongoURI from config folder and assigns the value to the variable db so we can use it

mongoose
	.connect(db, {
		//this connects us to mongodb(function of mongoose)
		useNewUrlParser: true, //this is just bullshit that you have to do
		useCreateIndex: true, // because mongodb
		useUnifiedTopology: true
	})
	.then(() => console.log("mongodb connected...")) // if you connect log it
	.catch(err => console.log(err)); // if you cant, log the error

// Use routes
app.use("/api/items", items); // tells app which is express which is the server to
// to use the api/items file which has all of the different routes
// inside of it

//const port = 5000; // assigns variable port the value of 5000

//app.listen(port, ()=> console.log ('Server started on port 5000')); //tells express to listen on the "port" and then when its running log it to tell us

//serve static assest if in production
//if (process.env.NODE_ENV === "production") {
//app.use(express.static("client/build"));
//app.get("*", (req, res) => {
//res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//});
//}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
