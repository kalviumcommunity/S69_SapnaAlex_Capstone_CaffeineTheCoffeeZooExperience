const express = require("express");
const { 
    createNotification, 
    getAllNotifications, 
    getNotificationsByUserId,  
    deleteNotification 
} = require("../controllers/NotificationController");

const router = express.Router();


router.post("/notifications", createNotification);


router.get("/notifications", getAllNotifications); //Implemented Get API


router.get("/notifications/user/:userId", getNotificationsByUserId); //Implemented Get API


router.delete("/notifications/:id", deleteNotification);

module.exports = router;
