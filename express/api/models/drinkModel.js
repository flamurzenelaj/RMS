import mongoose from "mongoose"

const schema = mongoose.Schema({
    "name": String,
    "price": Number,
    "description": String,
    "file":String,
})

export default mongoose.model("Drinks", schema)
