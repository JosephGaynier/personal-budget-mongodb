const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const charDataModel = require("./models/chart-data-schema");

const port = 3000;
let url = "mongodb://localhost:27017/PersonalBudget";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/hello", (req, res) => {
  console.log("Hello world!!!");
  res.json({data: "HelloWorld!!!"});
});

app.get("/budget", (req, res) => {
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    charDataModel.find({}).then(data => {
      res.json(data);
      mongoose.connection.close();
    }).catch(err => {
      console.log(err);
    });
  }).catch(err => {
      console.log(err);
  });
});

app.post("/budget", (req, res) => {
  mongoose.connect(url).then(() => {
    var chartData = 
    [
      new charDataModel({ "title": "Eat out", "budget": 25, "backgroundColor": "#ffcd56" }),
      new charDataModel({ "title": "Rent", "budget": 375, "backgroundColor": "#ff6384" }),
      new charDataModel({ "title": "Grocery", "budget": 110, "backgroundColor": "#36a2eb" }),
      new charDataModel({ "title": "Wife", "budget": 200, "backgroundColor": "#fd6b19" }),
      new charDataModel({ "title": "Kids", "budget": 350, "backgroundColor": "#32CD32" }),
      new charDataModel({ "title": "Gas", "budget": 65, "backgroundColor": "#800080" }),
      new charDataModel({ "title": "Dog", "budget": 20, "backgroundColor": "#8B4513" })
    ];
    charDataModel.insertMany(chartData).then((data) => {
      res.json(data);
      mongoose.connection.close();
    }).catch(err => {
      console.log(err);
    });
  }).catch(err => {
      console.log(err);
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost: ${port}`);
});
