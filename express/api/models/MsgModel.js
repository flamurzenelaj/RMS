import mongoose from "mongoose"

const schema = mongoose.Schema({
    "email":String,
    "name": String,
    "msg": String,
})
export default mongoose.model("Messages", schema)
