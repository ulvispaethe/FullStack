const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: [true, "desc is requied"]
    }
})
const Products = mongoose.model("Products", productSchema)
module.exports = Products