require("dotenv").config();
const connectDatabase = require("./config/db");
const express = require("express");
const cors = require("cors");
const multer = require("multer"); 
const upload = require("./middlewares/multer"); 
const authRoutes = require("./routes/authRoutes");

const userRoutes = require("./routes/UserRoutes");
const recipeRoutes = require("./routes/RecipeRoutes");
const notificationRoutes = require("./routes/NotificationRoutes");
const leaderboardRoutes = require("./routes/LeaderboardRoutes");
const gameRoutes = require("./routes/GamesRoutes");
const fileUploadRoutes = require("./routes/FileUploadRoutes");
const commentRoutes = require("./routes/CommentRoutes");
const favoriteRoutes = require("./routes/FavoriteRoutes");
const postRoutes = require("./routes/CommunityPostRoutes");
const coffeeProfileRoutes = require("./routes/CoffeeProfileRoutes");
const coffeeCompanionRoutes = require("./routes/CoffeeCompanionRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*", credentials: true }));



// app.post("/api/upload", upload.single("file"), (req, res) => {
//     if (!req.file) {
//         return res.status(400).json({ message: "No file uploaded!" });
//     }
//     res.status(201).json({ message: "File uploaded successfully!", fileUrl: req.file.path });
// });


app.use("/api/users", userRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/favorites", favoriteRoutes);
app.use("/api/files", fileUploadRoutes);
app.use("/api/games", gameRoutes);
app.use("/api", leaderboardRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/coffee-profiles", coffeeProfileRoutes);
app.use("/api/coffee-companions", coffeeCompanionRoutes);
app.use("/api/auth", authRoutes);

connectDatabase();


app.get("/", (req, res) => {
    res.send("Caffeine backend is running! ☕");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
});
