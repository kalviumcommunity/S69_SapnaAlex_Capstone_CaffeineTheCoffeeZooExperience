const mongoose = require("mongoose");

const Notifications = new mongoose.Schema({
    message:{
        type: String
    },
    sentAt: {
        time:{type: Number}
    }
})


module.exports = mongoose.model("notificationSchema", Notifications);