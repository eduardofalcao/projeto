var mongoose = require("mongoose");
const RoomSchema = new mongoose.Schema({
  name: String
});

RoomSchema.pre("find", function() {
    this.select("-__v");
});

const Room = mongoose.model("eduardofalcao.User", RoomSchema);
module.exports = Room