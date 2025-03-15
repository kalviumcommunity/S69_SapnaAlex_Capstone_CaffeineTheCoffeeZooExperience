const express = require("express");
const { createNotification, getAllNotifications, getNotificationById, deleteNotification } = require("../controllers/NotificationController");

const router = express.Router();

router.post("/notifications", createNotification);
router.get("/notifications", getAllNotifications);
router.get("/notifications/:id", getNotificationById);
router.delete("/notifications/:id", deleteNotification);

module.exports = router;
