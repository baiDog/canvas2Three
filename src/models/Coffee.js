const { Schema, model } = require("mongoose");

const coffeeSchema = new Schema({
    title: String,
    ratio: String,
    cup: String,
    description: String,
});

module.exports = model("Coffee", coffeeSchema);