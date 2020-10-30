const mongoose = require("mongoose");
const charDataModel = require("./models/chart-data-schema");

let url = "mongodb://localhost:27017/PersonalBudget";

mongoose.connect(url).then(() => {
    console.log("Connected to database");
}).catch(err => {
    console.log(err);
});

let newData = 
[
    new charDataModel({ "title": "Eat out", "budget": 25, "backgroundColor": "#ffcd56" }),
    new charDataModel({ "title": "Rent", "budget": 375, "backgroundColor": "#ff6384" }),
    new charDataModel({ "title": "Grocery", "budget": 110, "backgroundColor": "#36a2eb" }),
    new charDataModel({ "title": "Wife", "budget": 200, "backgroundColor": "#fd6b19" }),
    new charDataModel({ "title": "Kids", "budget": 350, "backgroundColor": "#32CD32" }),
    new charDataModel({ "title": "Gas", "budget": 65, "backgroundColor": "#800080" }),
    new charDataModel({ "title": "Dog", "budget": 20, "backgroundColor": "#8B4513" })
];
charDataModel.insertMany(newData);