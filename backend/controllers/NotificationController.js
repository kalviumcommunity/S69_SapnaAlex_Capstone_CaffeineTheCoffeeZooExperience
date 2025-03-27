const Notification = require("../models/Notification");



exports.createNotification = async (req, res) => {
    try {
        const newNotification = new Notification(req.body);
        await newNotification.save();
        res.status(201).json({ message: "Notification created successfully!", notification: newNotification });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



exports.getAllNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find().populate("user", "username email").sort({ createdAt: -1 });
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



exports.getNotificationsByUserId = async (req, res) => {
    try {
        const notifications = await Notification.find({ user: req.params.userId })
            .populate("user", "username email")
            .sort({ createdAt: -1 });

        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



exports.deleteNotification = async (req, res) => {
    try {
        await Notification.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Notification deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
