const mongoose = require("mongoose");

const Notifications = new mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId, ref:"User"},
    message:{
        type: String
    },
    sentAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("NotificationSchema", Notifications);