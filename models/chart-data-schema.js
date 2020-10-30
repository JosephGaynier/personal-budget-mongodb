const mongoose = require("mongoose");

const chartDataSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    backgroundColor: {
        type: String,
        required: true
    }
}, {collection: "chartData"});

module.exports = mongoose.model("chartDataSchema", chartDataSchema);