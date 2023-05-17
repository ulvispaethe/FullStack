const express = require("express")
const app = express()
const cors = require("cors")
const ProductsRouter = require("../server/routes/product.router")
const mongoose = require("mongoose")
const PORT=8080
app.use(express.json())
app.use(cors())
app.use("/products", ProductsRouter)
mongoose.connect("mongodb+srv://7h70760:ulvi2023@cluster0.u5vwpgw.mongodb.net/").then(() => {
    console.log("db connected")
})
app.listen(8080, () => {
    console.log(`app running on 8080`)
})