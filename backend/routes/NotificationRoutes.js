const express = require("express");
const { 
    createNotification, 
    getAllNotifications, 
    getNotificationsByUserId,  
    deleteNotification 
} = require("../controllers/NotificationController");

const router = express.Router();

// Post
router.post("/notifications", createNotification); 


router.get("/notifications", getAllNotifications); 


router.get("/notifications/user/:userId", getNotificationsByUserId); 


router.delete("/notifications/:id", deleteNotification);

module.exports = router;
