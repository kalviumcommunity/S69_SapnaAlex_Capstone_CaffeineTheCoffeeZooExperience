const mongoose = require("mongoose");

const Notifications = new mongoose.Schema({
    message:{
        type: String
    },
    sentAt: {
        type: Date.now
    }
})


module.exports = mongoose.model("notificationSchema", Notifications);