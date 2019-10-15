const express = require("../../node_modules/express"); // Brings in the necesary tools we need from express
const router = express.Router(); // and assings them to variables so we can use them

//brings in the item model
const Item = require("../../models/item");

//for get requests made to / go into 'Item'(which is a variable used to describe a file which contains
//the database model) and find the objects in there and sort them by date
//and then respond with a all of them in Json format
router.get("/", (req, res) => {
	//router.get is how get requests are coded

	Item.find() //function that is available through express
		.sort({ date: -1 }) // sort the items (-1) means acending order
		.then(items => res.json(items)); // then respond with them all in json format
});
//When a post request is made to / (which is api/items cause were in this file)
// create a new item using whatever the request had as being labeled "name" and put it into
// the "name" field of our database for the new item
router.post("/", (req, res) => {
	const newItem = new Item({
		//new variable called new item, describes object model for new item
		name: req.body.name //where the "name" fieldcomes from the req.body of the request
	});
	newItem
		.save() // and then save it to the database
		.then(item => res.json(item)); //  and then respond with that item from the database in json
});

// When a delete request is made to the end point with the id of the
// item to be deleted, find the item in the database and then remove it
// and respond saying it was sucessfully removed
// or it wasn't deleted or if it wasn't or couldn't be found etc.
router.delete("/:id", (req, res) => {
	Item.findById(req.params.id)
		.then(item => item.remove().then(() => res.json({ sucess: true })))
		.catch(err => res.status(404).json({ sucess: false }));
});

module.exports = router; // exports all of the routes so we can use them in the other files,
// like the server
