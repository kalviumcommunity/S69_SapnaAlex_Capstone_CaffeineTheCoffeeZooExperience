const mongoose = require("mongoose");

const Notifications = new mongoose.Schema({
    message:{
        type: String
    },
    sentAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("NotificationSchema", Notifications);